// const http = require ('http');
// const cowIo = require('cow.io')

// const listenServer = (req, res)=>{
//     res.writeHead(200,{
//         "Content-type":"text/html"
//     });
//     res.write("Hola2");
// }
// const server = http.createServer(listenServer);
// server.listen (3000, ()=>{
//     console.log("Escuchando en 3000");
// });

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

