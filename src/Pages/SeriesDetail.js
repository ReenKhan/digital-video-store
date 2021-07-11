import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useState,useEffect } from 'react';
import "../css/SeriesDetail.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function SeriesDetail({children,id}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const[detail, setDetail]=useState();


  useEffect(()=>{
    fetch(`/series/${id}`)
     .then((res)=>{
       return res.json()
    })
    .then(json=>{
      setDetail(json);
    })
     .catch((err)=>{
       console.log(`Error ${err} `);
     })
  })
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <button  className="movieposter" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {detail &&(
          <div className={classes.paper}>
            <div className="MovieDetail">
            <img src={`${detail.Poster}`} className="MovieDetail_portrait" alt="poster" />
            <img src={`${detail.backdrop_path}`} className="MovieDetail_landscape"  alt="post"/>
            <div className="MovieDetail_about">
              <span className="MovieDetail_title">
                {detail.Title} ({(detail.Year)})
              </span>
              <span className="buy">
                <p>Buy: {detail.Buy}</p>
              </span>
              <span className="MovieDetail_overview">
                {(detail.overview)}
              </span>
            </div>
            </div>
            
          </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}

