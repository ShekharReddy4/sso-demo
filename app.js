var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var Multipass = require('atlas-node-multipass');
var apikey = '1234567890abcdef';
var sitekey = 'localhost';
var multipass = new Multipass(apikey, sitekey);

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(expressSession(
    {
        secret: process.env.SESSION_SECRET || 'secret',
        saveUninitialized:false,
        resave:false
    }));

app.set('view engine','ejs');

function ensureAuthenticated(req,res,next){
    if (req.session.authenticated){
        next();
    }else{
        res.sendStatus(403);
    }
}

//routes
app.get('/', function (req, res) {
    res.render('index',{
        isAuthenticated: req.session.authenticated,
        user: req.user
    });
});

app.get('/login', function(req, res){
    res.redirect('http://localhost:8080/') ;
});

app.get('/auth/multipass/callback', function (req, res) {

    var token = req.query.multipass;
    var obj = multipass.decode(token);
    //console.log(obj);
    req.session.authenticated = true;
    res.redirect('/');
});

app.get('/logout', function (req, res) {
    delete req.session.authenticated;
    res.redirect('/');
});

app.get('/api/data',ensureAuthenticated, function (req, res) {
    res.json([
        {value: 'foo'},
        {value: 'bar'},
        {value: 'baz'}
    ])
});

var port = process.env.PORT || 8000;

app.listen(port, function(){
    console.log('http://127.0.0.1:'+port+'/');
});