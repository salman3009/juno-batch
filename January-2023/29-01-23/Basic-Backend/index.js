const express = require('express');
const app = express();

app.get('/newton',(req,res)=>{
      res.send("<html><head></head><body><p>hello world</p></body></html>")
});

app.get('/school',(req,res)=>{
      res.send("hello world")
});

app.listen(8080);