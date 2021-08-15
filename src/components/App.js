import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../css/App.css";
import React from 'react';
import Header from "./Header";

import SimpleBottomNavigation from "./MainNav";
import Movies from "../Pages/Movies";
import Series from "../Pages/Series";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Search from "../Pages/Search";
import searchResult from "../Pages/searchResult";
import { Container } from "@material-ui/core";
import Home from "../Pages/Home";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import MovieContext from "./MovieContext";

function App() {

  var [id, setID] = useState({
    title:""
  });

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then(res => res.json())
      .then((data) => {
        setMovies((previousState) => {
          previousState = data;
          return previousState
        });
      })
      .catch(err => console.log(`Error ${err}`));
  }, [])

  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/series")
      .then(res => res.json())
      .then((data1) => {
        setSeries((previousState) => {

          previousState = data1;
          return previousState
        });
      })
      .catch(err => console.log(`Error ${err}`));
  }, [])

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/trendingMovies")
      .then(res => res.json())
      .then((data2) => {
        setTrendingMovies((previousState) => {
          previousState = data2;
          return previousState
        });
      })
      .catch(err => console.log(`Error ${err}`));
  }, [])

  const [trendingSeries, setTrendingSeries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/trendingSeries")
      .then(res => res.json())
      .then((data3) => {
        setTrendingSeries((previousState) => {
          previousState = data3;
          return previousState
        });
      })
      .catch(err => console.log(`Error ${err}`));

  }, [])

  const [userActive, setUser] = useState(
    {
      user:'Guest',
    firstName:'',
     lastName:'',
     username:'',
     password:''
    }
  );

  return (
    <React.Fragment>

      <BrowserRouter>
        <Header />
        
        <div className="app">
          <Container>
            <MovieContext.Provider value={{ movies, setMovies, series, setSeries, trendingMovies, setTrendingMovies, trendingSeries, setTrendingSeries,id,setID,userActive,setUser }}>
              <Switch>

                <Route path="/" component={Home} exact />
                <Route path="/movies" component={Movies} />
                <Route path="/series" component={Series} />
                <Route path="/search" component={Search} />
                <Route path="/searchResult" component={searchResult} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/login" component={Login} />
               

              </Switch>
            </MovieContext.Provider>
          </Container>
          <hr />
        </div>
        <SimpleBottomNavigation />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
