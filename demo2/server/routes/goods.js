var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Goods = require('../models/goods')

mongoose.connect('mongodb://127.0.0.1:27017/db_demo')

mongoose.connection.on('connected', function() {
  console.log('mongodb connected success')
})

mongoose.connection.on('error', function() {
  console.log('mongodb connected error')
})

mongoose.connection.on('disconnected', function() {
  console.log('mongodb connected disconnected')
})

router.get('/', (req, res, next) => {
  //res.send('hello ')
  let sort = parseInt(req.param('sort'))
  let page = parseInt(req.param('page'))
  let pageSize = parseInt(req.param('pageSize'))

  let skip = (page-1) * pageSize
  let params = {}
  let goodsModel = Goods.find().skip(skip).limit(pageSize)
  goodsModel.sort({'salePrice': sort})
  goodsModel.exec((err, doc) => {
    res.json({
      status: '0www',
      msg: 'yes you success',
      result: {
        count: doc.length,
        list: doc
      }
    })
  })
  // Goods.find({}, (err,doc) => {
  //   console.log(doc)
  //   if (err) {
  //     res.json({
  //       status: '1',
  //       msg: err.message
  //     })
  //   } else {
  //     res.json({
  //       status: '0www',
  //       msg: 'yes you success',
  //       result: {
  //         count: doc.length,
  //         list: doc
  //       }
  //     })
  //   }
  // })
})


// 加入到购物车
router.post('/aaa', (req, res, next) => {
  res.json({
    status: 1,
    msg: 'hello'
  })
})

router.post('/addCart',function(req, res, next) {
    var userId = '100000077',productId = req.body.productId
    var User = require('../models/user')
    User.findOne({userId: userId},function(err, userDoc) {
      if (err) {
        console.log(err.message)
        res.json({
          status: 1,
          msg: err.message
        })
      } else {
        Goods.findOne({productId},(err1, doc) => {
          if (err1) {
            res.json({
              status: 1,
              msg: err.message
            })
          } else {
            doc.productNum = 999
            doc.checked = 999
            userDoc.cartList.push(doc)
            userDoc.save(function(err2, doc2) {
              if (err2) {
                res.json({
                  status: 1,
                  msg: err.message
                })
              } else {
                res.json({
                  status: 0,
                  res: 'suc'
                })
              }
            })
          }
        })
      }
    })
})

module.exports = router