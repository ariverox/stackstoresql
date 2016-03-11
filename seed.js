var knex = require('knex')(require('./knexfile.js').development)


var things = [{
  name: 'banana',
  price: 12.13,
  quantity:123,
  description: 'the ebst banana ever made'

},{
  name: 'apple',
  price: 1112.13,
  quantity:13,
  description: 'these apples be dan yo'

},{
  name: 'orange',
  price: 144442.13,
  quantity:1,
  description: 'these are not dank'

},{
  name: 'phone',
  price: 12.1443,
  quantity:0,
  description: 'the dank yo'

},{
  name: 'almond',
  price: 331,
  quantity:123,
  description: 'XXXX'

}]

knex('items').insert(things).then(function(result){
  console.log('result', result)

}).finally(function(){
  console.log('destroying pool')
  knex.destroy()
})
