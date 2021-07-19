var express = require('express');
var router = express.Router();
var db = require('../database');

//for post req data are in req.body
router.get('/add-my-profile', (req, res, next)=>{
  res.send('Hello World');
})

router.post('/', (req, res, next)=>{
  let data=req.body;
  console.log(data);
  res.end();
})

module.exports = router;
