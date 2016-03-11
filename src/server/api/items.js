import express from 'express'
import Item from '../models/item.js'
import _ from 'lodash'

let router = express.Router()


router.get('/', (req,res,next)=>{
  Item.forge().fetchAll().then((items)=>{
    console.log('these are all the itmes', items)
    res.json(items.toJSON())
  }).catch((e)=>{
    console.log('error', e)
    next(new Error('there was an error'))
  })

})

router.get('/:id', (req,res,next)=>{
  let id = req.params.id
  if(!_.isNumber(id)) return next()
  Item.where('id','=',req.params.id).fetch().then((item)=>{
    console.log('these are all the itmes', item)
    res.json(item.toJSON())
  }).catch((e)=>{
    console.log('error', e)
    next(new Error('there was an error'))
  })
})


router.get('/:name', (req,res,next)=>{
  Item.where('name','=',req.params.name).fetch().then((item)=>{
    if(!item) return res.send('item doesnt exist')
    res.json(item.toJSON())
  }).catch((e)=>{
    console.log('error', e)
    next(new Error('there was an error'))
  })
})

router.post('/', (req,res,next)=>{
  let {name, price, quantity, description} = req.body
  Item.forge({name,price,quantity,description}).save().then((item)=>{
    console.log('saved item', item.toJSON())
    res.json(item.toJSON())
  })

})


router.put('/', (req,res,next)=>{

})

router.delete('/', (req,res,next)=>{

})


module.exports = router
