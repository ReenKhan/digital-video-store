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
const importData=require("./db.json");

const PORT =process.env.PORT || 3000;

    app.get('/', (req,res)=>{
        req.send(importData);
    });

app.listen(PORT, ()=>{
     console.log(`JSON Server is running on port http://localhost:${PORT}` )
});




