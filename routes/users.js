var express = require('express');
var router = express.Router();
var db = require('../database');

//for post req data are in req.body
// router.get('/add-my-profile', (req, res, next)=>{
//   res.send('Hello World');
// })

router.post('/', (req, res, next)=>{
  let data = req.body;
  db.insertProfile(
    {
      "mergious_id": data["profile"]["mergiousId"],
      "name": data["profile"]["name"],
      "address":data["profile"]["address"],
      "city":data["profile"]["city"],
      "district":data["profile"]["district"],
      "pincode":data["profile"]["pincode"],
      "mobile_number":data["profile"]["mobileNumber"],
      "alternate_mobile_number":data["profile"]["alternateMobileNumber"],
      "email":data["profile"]["email"],
      "gender":data["profile"]["gender"],
      "dob":data["profile"]["dateOfBirth"],
      "community":data["profile"]["tribalCommunity"],
      "father_education":data["profile"]["fatherEducation"],
      "father_field_of_study":data["profile"]["fatherFieldOfStudy"],
      "mother_education":data["profile"]["motherEducation"],
      "mother_field_of_study":data["profile"]["motherFieldOfStudy"],
    }
  ).then((value)=>{
    console.log(value);
  });
  res.end();
})

module.exports = router;
