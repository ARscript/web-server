'use strict'
var db = require('../db')

exports.getById = function *id(){
  var User = yield db
    .mongo
    .models
    .Users
    .findOne({_id: id})

  return User
}
