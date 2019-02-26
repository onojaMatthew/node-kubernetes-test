const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  sender: {
    type: String
  },
  message: {
    type: String
  }
});

const Message = mongoose.model("Message", messageSchema);

exports.Message = Message;
