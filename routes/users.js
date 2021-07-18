var express = require('express');
var router = express.Router();
var db = require('../database');

//for post req data are in req.body
router.post('/add-my-profile', (req, res, next)=>{
  let data=req.body;
  db.insertOne(data);
  res.end();
})

/* default api call router */
router.get('/', async function(req, res, next) {
 let data = await db.getAlluser();
  res.json(data);
})

module.exports = router;
