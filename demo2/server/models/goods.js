var mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
  // 'title': String,
  // 'color': String
  'productId': String,
  'productNum': Number,
  'checked': String, 
  'productName': String,
  'salePrice': Number,
  'productImage': String
})

module.exports = mongoose.model('Good', productSchema)
