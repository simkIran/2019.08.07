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
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    console.log("I'm at the top.!!!")
})
app.get('/',function(req,res){
    res.send('GET sent')
});
app.post('/',function(req,res){
    console.log(req.body)
    res.send('POST send')
});
app.put('/',function(req,res){
    res.send('PUT sent')
});
app.delete('/',function(req,res){
    res.send('DELETE sent')
});


app.listen(3000);

