'use strict';
var User = require('../../models/user');
var Bluebird = require('bluebird');
var config = require('./config');
var jwtTokenService = require('./jwt.token.service');
var loadUserByName = require('./loadUser').loadUserByName;
var bcrypt = require('bcrypt');
var Bluebird = require('bluebird');

Bluebird.promisifyAll(bcrypt);

module.exports = {
  comparePasswords,
  hashPassword
};

// Implementation ---
function comparePasswords(passwordFromUser, passwordFromDB) {
  return bcrypt.compareAsync(passwordFromUser, passwordFromDB);
}

function hashPassword(password) {
  return bcrypt.genSaltAsync(10).then(function(salt) {
    return bcrypt.hashAsync(password, salt);
  });
}

module.exports = registerMiddleware;

// Implementation ---
function registerMiddleware(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  if (!username) {
    return res.status(400).send({error: 'username MUST be specified'});
  }
  // STEP 1: check whether username is taken
  loadUserByName(username).then((user) => {
    if (user) {
      // We already have this user. TODO:: don't expose user database.
      return Bluebird.reject('username is taken');
    }
    // its a new user yay!!
    // STEP 2: hash password.
    if (password) {
      return hashPassword(password).then((hash) => {
        createNewUser(username, hash).then((newUser) => {
          // STEP 3: generate JWT token
          var data = {
            subject: newUser.id,
            payload: {
              provider: config.JWT_ISSUER
            }
          };
          return jwtTokenService.generate(data).then(function(token) {
            var resData = newUser.toJSON();
            resData.token = token;
            res.status(200).send(resData);
          });
        });
      });
    } else {
      createNewUser(username).then((newUser) => {
        // STEP 3: generate JWT token
        var data = {
          subject: newUser.id,
          payload: {
            provider: config.JWT_ISSUER
          }
        };
        return jwtTokenService.generate(data).then(function(token) {
          var resData = newUser.toJSON();
          resData.token = token;
          res.status(200).send(resData);
        });
      });
    }

  }).catch((error) => {
    res.status(400).send({
      error: error.message || error
    });
  });
}


function createNewUser(username, password) {
  if(!password) password = null
  var userSpec = {
    username,
    password,
    created_at: new Date(),
    active: true
  };
  return new User(userSpec).save();
}
