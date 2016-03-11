import jwt from 'jsonwebtoken'
import _ from 'lodash'
import {invalid} from '../../lib'
import {loadUserByName, loadUserFromToken} from './loadUser'

function auth(columns = null, required=true) {
  return function(req, res, next) {

    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token && _.isString(token)) {
      loadUserFromToken(token, columns).then((user) => {
        req.user = user
        next()

      }).catch((error) => {
        console.log('error loading from token', error)
        invalid(res, 'error loading from token')
      })
    } else {
      if (required) {
        return invalid(res, 'not authenticated')
      } else {
        next()
      }
    }
  }
}
