
import User from '../../models/user'
import Bluebird from 'bluebird'
import tokenService from './token.js'


module.exports = {
  loadUserFromToken,
  loadUserByName
};

// Implementation ---
function loadUserByName(username) {
  return User.where('username', username).fetch({});
}

function loadUserFromToken(token, columns) {


  return tokenService.verify(token).then(function (decoded) {
    console.log('decoded', decoded)
    var userId = +decoded.sub;
    // Find the user in 'users' table
    return User.where('id', userId).fetch(columns || {}).then(function(user) {
      if(!user) {
        return Bluebird.reject({error: 'User not found'});
      }
      return user;
    });
  });
}



function getFingerPrint (token){
  var fingerprint = token.split('.')[3]

}
