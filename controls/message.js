const { Message } = require("../models/message");

exports.getMessage = (req, res, next) => {
  Message.find()
    .then(message => {
      res.json(message);
    })
    .catch(err => {
      console.log(err.message);
    });
}

exports.postMessage = (req, res, next) => {
  const message = new Message();
  message.sender = req.body.sender;
  message.message = req.body.message;

  return message.save()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err.message);
    });
}

exports.updateMessage = (req, res, next) => {
  Message.findByIdAndUpdate(req.params.id)
    .then(message => {
      res.json(message);
    })
    .catch(err => {
      console.log(err.message);
    });
}

exports.deleteMessage = (req, res, next) => {
  Message.findByIdAndDelete(req.params.id)
    .then(message => {
      res.json(message);
    })
    .catch(err => {
      console.log(err.message);
    });
}