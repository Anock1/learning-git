const { log } = require('console');
const http = require('http');
const server = http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type': 'plain/html'})
})
const socket = socket.io();
server.listen(3000,()=>{
    console.log('server')
})
