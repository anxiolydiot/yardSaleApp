var PORT = 1738;
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var db = 'mongodb://localhost/yardsale';
mongoose.connect(db);

var User = require('./models/user');
var Item = require('./models/item');
var Comment = require('./models/comment');

app.use(session({
    secret: 'quackbird noodletown',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

app.use(logger('dev'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/public/app.html");
});

app.post('/signup', function(req, res, next){
  var newUser = new User(req.body);
  newUser.save(function(err, newUser){
    if (err){
      console.log(err);
      res.send(err);
    } else {
      // console.log('trying to save');
      console.log(newUser);
      res.send(newUser);
    }
  });
});

app.post('/login', function(req, res, next){
  User.findOne({
    "username": req.body.username
  }).exec(function(err,user){
    if (err) {
      res.send(err);
    }
    console.log(user);
    res.send(user);
    }
  );
});

// app.post('/money', function(req, res, next){
//   var query = {"username":req.body.username"};
// }



app.listen(PORT, function() {
  console.log("LISTENING ON %s", PORT);
});