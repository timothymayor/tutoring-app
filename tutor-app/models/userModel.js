// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     first_name: {
//     type: String,
//   },
//   last_name: {
//     type: String,
//   },
//   email: {
//     type: String,
//     required: [true, 'Please Provide an email'],
//     unique: [true, 'This email is already taken, please try another'],
//     lowercase: true,
//     validate: [validator.isEmail, 'Please provide a valid email'],
//   },
//   role: {
//     type: String,
//     default: 'user',
//   },
//   password: {
//     type: String,
//     required: [true, 'Kindly enter your password'],
//     select: false,
//   },

// // userSchema.methods.generateAuthToken = async () => {
// //     // Generate an auth token for the user
// //     const user = this;
// //     const token = jwt.sign({_id: user._id}, 'idmcalculus');
// //     user.tokens = user.tokens.concat({token});
// //     await user.save();
// //     return token;
// // };

// // module.exports = mongoose.model('Users', userSchema);

// const user = mongoose.model('users', userSchema);
// module.exports = user;

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    first_name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  last_name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  email: {
    type: String,
    required: true
  },
// 	password: {
//     type: String,
//     required: true
//   },
  role: {
    type: String,
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Kindly enter your password'],
    select: false,
  },
  Created_date: {
    type: Date,
    default: Date.now
},
});

module.exports = mongoose.model('user', UserSchema);