// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var cookieSession = require('cookie-session');
var routes = require('./routes/index.js');
var users = require('./routes/index.js');
var bodyParser = require('body-parser')

require('./config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.set('view engine', 'pug')
app.set('views', __dirname+'/views'); 
app.use(cookieSession({
    name:'supremeXnike',
    keys: ['key1', 'key2'],
    secret: 'secretClementine',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
    return_to: '/'
}));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(passport.initialize());
app.use(passport.session());
 
routes(app, passport, mongoose);

// listen for requests :)
var port = 8888;
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});