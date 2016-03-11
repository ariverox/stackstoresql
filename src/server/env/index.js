import dev from './dev'
import prod from './prod'

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production'){
  module.exports =  prod
} else {
  console.log('dev',dev)
  module.exports =  dev
}
