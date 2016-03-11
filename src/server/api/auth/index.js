import jwt from 'jsonwebtoken'
import {Promise, OperationalError} from 'bluebird'
import {JWT} from '../../env'
import express from 'express'
import User from '../../models/user'
import authorize from './authorize'
import {invalid} from '../../lib'
import {generate} from './token'
import {loadUserByName, loadUserFromToken} from './loadUser'
import changePasswordMiddleware from './password'
let bcrypt = require('bcrypt')

Promise.promisifyAll(bcrypt)
Promise.promisifyAll(jwt);
let router = express()


function hashPassword(password) {
  return bcrypt.genSaltAsync(10).then(function(salt) {
    return bcrypt.hashAsync(password, salt);
  });
}

function comparePasswords(passwordFromUser, passwordFromDB) {
  return bcrypt.compareAsync(passwordFromUser, passwordFromDB);
}

//the way json webtokens work
let createUser = (username, password = null) => {
  return User.forge({username, password}).save().then((user) => {
    console.log('user', user)
    return generate(user)
  })
}


router.post('/register', (req, res, next) => {
  console.log('getting hit register route')
  let {username, password} = req.body
  console.log('username and password', username, password)
  loadUserByName(username).then((user) => {
    if (user)
      return invalid(res, 'username is already taken')
    if (password) {
      console.log('password provided', password)
      hashPassword(password).then((hashedPassword)=>{
        console.log('hahedPassword', hashedPassword)
        return createUser( username,hashedPassword)
      }).then((token) => {
        console.log('token', token)
        res.send(token)
      }).catch(err =>{
        if(err)invalid(res, 'what', null, true)
      })

    } else {

      createUser(username).then((token) => {
      return  res.send({token})
      }).catch((error) => {
        console.error('err', error)
      })

    }
  })
})

router.post('/login', (req, res, next) => {
  let {username, password} = req.body
  const errorMessage = 'user.name/password is wrong, the user does not exist, or does not have a password'
  loadUserByName(username).then((user) => {
    if (!user)
      return invalid(res,  errorMessage)
    if (!user.password)
      return invalid(res, errorMessage)
    comparePasswords(password, user.password).then((result)=>{
      if(result){
        return generate(user).then((token)=>{
          return res.send({token})
        })
      }
      return invalid(res, errorMessage)
    })


  })
})
router.post('/logout', (req, res, next) => {})
router.get('/session', (req, res, next) => {})
// router.post('/password/change', authorize, changePasswordMiddleware);
// router.post('/password', authorize, changePasswordMiddleware);

export {router, authorize}
