var express = require('express');
var router = express.Router();
var db = require('../database');

//for post req data are in req.body
// router.post('/add-my-profile', (req, res, next)=>{
//   let data=req.body;
//   db.insertOne(data).then((value)=>{});
//   res.end();
// })

router.post('/', (req, res, next)=>{
  let data=req.body;
  console.log(data);
  res.end();
})

module.exports = router;
