var mongoose= require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  username: String,
  money: Number,
  itemsBought: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

var User = mongoose.model('User', userSchema);
module.exports = User;