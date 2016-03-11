
import {db, redis} from '../env'
import Redis from 'ioredis'

let redis = new Redis()


let bookshelf = require('bookshelf')
let knex =  require('knex')(db)

bookshelf = bookshelf(knex)

bookshelf.plugin('registry');


export default bookshelf
