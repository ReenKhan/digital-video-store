// const jsonServer=require('json-server');
// const server=jsonServer.create();
// const express=require('express');

// const cors=require('cors');
// const router =jsonServer.router('./db.json');
// const middlewares= jsonServer.defaults();

// const PORT =process.env.PORT || 3000;

// server.use(cors());
// server.use(express.static('build'));
// server.use(middlewares);
// server.use('/api',router);

// server.listen(PORT, ()=>{
//     console.log('JSON Server is running on', PORT)
// });

const express=require('express');
const app=express();
const path=require('path');

const PORT =process.env.PORT || 3000;

if(process.env.NODE_ENV==="production"){
    app.use(express.static('build'));
    app.get('*', (req,res)=>{
        req.sendFile(path.resolve(__dirname,'build','index.html'));
    })
}
app.listen(PORT, ()=>{
     console.log('JSON Server is running on', PORT)
});




