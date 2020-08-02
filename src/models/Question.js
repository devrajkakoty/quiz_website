const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  description: String,
  answer: String,
  index: {
    type: Number,
    unique: true,
    required: [true, "Question must have an index"],
  },
});

module.exports = mongoose.model("Question", QuestionSchema);
