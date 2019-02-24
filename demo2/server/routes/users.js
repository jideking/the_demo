var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET users listing. */
router.post('/login', function(req, res, next) {
  let param = {
    userId: req.body.userId,
    userPassword: req.body.userPassword
  }
  User.findOne(param,function(err, doc) {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      res.cookie('userId', doc.userId, {
        path: '/',
        maxAge: 1000*60*60
      })

      // req.session.user = doc
      res.json({
        status: 0,
        msg: '',
        result: {
          userName: doc.userName,
          
        }
      })
    }
  })
});

module.exports = router;
