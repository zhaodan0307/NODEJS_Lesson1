//reference node's built-in http library to run a local web server
//使用了http library
let http = require('http');

//use the http library to start a web server and listen for HTTP request events and send an http response
//localhost：3000/webserver
//control C to stop the server
http.createServer((req,res)=>{
    //write HTTP headers with a 200 OK status code
    //network-> reload the page to see the status code by GET
    res.writeHead(200,{'Content-Type':'text-plain'})
    res.write('Hello World - first node page')
    res.end()
}).listen(3000)

//print message to console to show server is active
console.log('Node server running on port 3000')