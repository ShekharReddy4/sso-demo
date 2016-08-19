var express = require('express');

var app = express();
 
app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.render('index',{
        isAuthenticated: false,
        user: req.user
    })
});

app.get('/login', function(req, res){
  res.render('login');
});

app.post('/login', function(req, res) {
  res.send("hello");
});

var port = process.env.PORT || 8000;

app.listen(port, function(){
    console.log('http://127.0.0.1:'+port+'/');
});




