import {router as auth} from './auth'
import users from './users'
import items from './items'
import express from 'express'
let router = express.Router()


router.use('/items', items)
router.use('/users', users)
router.use('/auth', auth)


module.exports = router
