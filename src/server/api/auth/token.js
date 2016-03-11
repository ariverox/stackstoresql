
import jwt  from 'jsonwebtoken'
import Bluebird from 'bluebird'
import {JWT}  from '../../env'


Bluebird.promisifyAll(jwt);

//Implementation ---


export function verify(token) {
  return jwt.verifyAsync(token, JWT.secret, {issuer: JWT.issuer});
}


export function generate(data,expires){
  if (data == 'error') {
    console.log('there as an errro')
    return
  }
  let token = jwt.sign(data,JWT.secret,{issuer: JWT.issuer, expiresIn: JWT.expires})
  return Promise.resolve(token)

}
