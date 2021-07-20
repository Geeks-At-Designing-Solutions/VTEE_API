var mysql = require('mysql2');

//db config
// var con = mysql.createConnection({
//   host: "156.67.222.81",
//   user: "u250186539_vtee",
//   password: "Vtee@123",
//   database: 'u250186539_vtee'
// });

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'vtee'
});

// for connect db
con.connect(err => {
  if (err){ console.log("Database not connected :("); throw err;}
  console.log("Database connected :)");
});

let vteeDBOperations = {};

// for insert into table use this example
vteeDBOperations.insertProfile = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO profile SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Profile ID:', res.insertId);
      resolve(res.insertId);
    });
  })
}

vteeDBOperations.insertEducation = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO education SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Education ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertITProficiency = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO it_proficency SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert IT Proficiency ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertLanguageProficiency = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO language_proficiency SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Language Proficiency ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertSkillTraining = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO skill_training SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Skill Training ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertTraditionalSkills = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO traditional_skill SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Traditional Skill ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertEmployementData = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO employement_data SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Employement Data ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertInformalWorkExperience = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO informal_sector SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Informal Experience ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertEmployementInterests = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO employement_interest SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Employement Interests ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertCapacityDevelopment = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO capacity_development SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Capacity Development ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertCulturalTalents = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO cultural_interests SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Cultural Interests ID:', res.insertId);
    });
  })
}

vteeDBOperations.insertEntrepreneurship = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO entrepreneurship SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert Entrepreneurship ID:', res.insertId);
    });
  })
}

module.exports = vteeDBOperations;
