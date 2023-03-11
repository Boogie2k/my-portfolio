const Mongoose = require("mongoose");

const TaskSchema = new Mongoose.Schema({
  Image: String,
  name: String,
  desc: String,
  src: String,
  site: String,
  lang: String,
  isSite: Boolean,
  isSrc: Boolean,
});
module.exports = Mongoose.model("Task", TaskSchema);
