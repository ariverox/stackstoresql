import bookshelf from './index'

let User = bookshelf.Model.extend({
  tableName:'users'
})


export default bookshelf.model('User', User)
