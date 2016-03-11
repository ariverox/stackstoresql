import bookshelf from './index'

let Item = bookshelf.Model.extend({
  tableName:'items'
})


export default bookshelf.model('Item', Item)
