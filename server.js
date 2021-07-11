// const jsonServer = require('json-server');
// const app = jsonServer.create();
// const path = require('path');
// const express = require('express');
// const cors=require('cors');
// const middlewares = jsonServer.defaults();
// const router = jsonServer.router('db.json');

// const port = process.env.PORT || 4000;

// app.use('/db', middlewares, router);
// app.use(cors());
// app.use(express.static('build'));

// // app.get('/*', function (req, res) {
// //     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// // });

// server.listen(port,()=>{
//     console.log("server running on", port)
// });
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);