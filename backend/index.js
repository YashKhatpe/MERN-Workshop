const http = require('http');
const notes = require('./notes.json');

const server = http.createServer((req, res) => {


  if(req.url=='/notes') {
    res.end(JSON.stringify(notes));
  }
  
  if(req.url=="/") {
    res.end("Welcome to Node.js");
  }
})


server.listen(8000);
