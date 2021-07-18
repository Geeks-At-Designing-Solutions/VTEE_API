var express = require('express');
var router = express.Router();

/* default api call that has a "/admin" */
router.get('/', function(req, res, next) {
  const data = {
    firstName:"Admin Jiphy",
    lastName:"T S",
    age:50,
    type:"Hacker",
  }
  res.json(data);
});

module.exports = router;
