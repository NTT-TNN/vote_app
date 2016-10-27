var mongoose = require('mongoose');
var voteSchema = new mongoose.Schema({ ip: 'String' });
var choiceSchema = new mongoose.Schema({
  text: String,
  votes: [voteSchema]
});
var Polls = new mongoose.Schema({
  question: { type: String, required: true },
  choices: [choiceSchema]
});

module.exports = mongoose.model('Polls',Polls);
