const http=require('http');
const site=http.createServer(function(req,res){
    console.log('Hello World');
    res.write('YeaH...Go HTTP!!!');
    res.setHeader('what should I do here..?');
    res.end('<h1>Hello Guys</h1>')
});

site.listen(3000);