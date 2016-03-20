
var mongoose = require('mongoose');


//connect to db
mongoose.connect('mongodb://localhost/yardsale');

var db= mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});



//require models 
var User = require('./models/user');
var Item = require('./models/item');
var Comment = require('./models/comment');

//create data

//first user data 
var user1 = new User({
  username: 'John Smith',
  money: 800000,
  itemsBought: ['bedazzling kit','bleach lover\'s cookbook']
});

user1.save(function(err){
  if (err) return (err);
  console.log('user1 saved');
});

var comment1 = new Comment({
  commentMsg: 'meow I\'m a washing machine',
  _owner: user1.id,
  itemLink: 'a square plum'
});

comment1.save(function(err){
  if (err) return (err);
});

var item1 = new Item({
  _owner: user1.id,
  itemName: 'bedazzling kit',
  itemDescription: 'shine like diamond',
  itemPrice: 80,
  itemSold:true
});

var item2 = new Item({
  _owner: user1.id,
  itemName: 'bleach lover\'s cookbook',
  itemDescription: 'I bet you\'re dying to try these',
  itemPrice: 500,
  itemSold:true
});

item1.save(function(err){
  if (err) return (err);
});

item2.save(function(err){
  if (err) return (err);
});

//second user data 
var user2 = new User({
  username: 'shaq',
  money: 5000067,
  itemsBought: ['haunted pants','cheetos','beethoven concert tickets']
});

user2.save(function(err){
  if (err) return (err);
});

var comment2 = new Comment({
  commentMsg: 'this is the worst app i\'ve ever used',
  _owner: user2.id,
  itemLink: 'expired Arthur Treacher\'s gift card'
});

comment2.save(function(err){
  if (err) return (err);
});

var item3 = new Item({
  _owner: user2.id,
  itemName: 'haunted pants',
  itemDescription: 'pants that are haunted',
  itemPrice: 888,
  itemSold:true
});

item3.save(function(err){
  if (err) return (err);
});

var item4 = new Item({
  _owner: user2.id,
  itemName: 'cheetos',
  itemDescription: 'severe good taste',
  itemPrice: 74,
  itemSold:true
});

item4.save(function(err){
  if (err) return (err);

  Item.update({
    itemName: 'cheetos'
  }, {
    $push:{
      comments: comment3._id
    }
    }).exec(function(err){
    if (err) return (err);
  });
});

var item5 = new Item({
  _owner: user2.id,
  itemName: 'beethoven concert tickets',
  itemDescription: null,
  itemPrice: 3,
  itemSold:true
});

item5.save(function(err){
  if (err) return (err);
});

// third user data
var user3 = new User({
  username: 'scott_baio',
  money: 900000,
  itemsBought: []
});

user3.save(function(err){
  if (err) return (err);
});

var comment3 = new Comment({
  commentMsg: 'Can I get some?',
  _owner: user3.id,
  itemLink: 'cheetos'
});

comment3.save(function(err){
  if (err) return (err);
  console.log('done');
});
