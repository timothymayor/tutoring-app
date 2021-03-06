'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('user');

exports.list_all_user = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_user  = function(req, res) {
    var new_user = new user(req.body);
    new_user.save(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  exports.read_user  = function(req, res) {
    User.findById(req.params.userId, function(err, user ) {
      if (err)
        res.send(err);
      res.json(users);
    });
  };

  exports.update_user  = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  exports.delete_user  = function(req, res) {
    User .remove({
      _id: req.params.userId
    }, function(err, user) {
      if (err)
        res.send(err);
        res.json({ message: 'User deleted successfully' });
  });
};