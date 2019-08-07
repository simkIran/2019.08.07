/*const http=require('http');
const site=http.createServer(function(req,res){
    console.log('Hello World');
    //res.write('YeaH...Go HTTP!!!');
    res.setHeader('Content-type','text/html');
    console.log(req.rawHeaders)
    res.end('<h1>Hello Guys..!!!</h1>')
});*/
       


var express=require('express');
var app =express();
app.get('/',function(req,res){
    res.send('Hello World')
});

app.listen(3000)

site.listen(3000);