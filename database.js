var mysql = require('mysql2');

//db config
// var pool = mysql.createPool({
//   connectionLimit:10,
//   host: "156.67.222.81",
//   user: "u250186539_vtee",
//   password: "Vtee@123",
//   database: 'u250186539_vtee'
// });

var pool = mysql.createPool({
  connectionLimit:10,
  host: "localhost",
  user: "root",
  password: "root",
  database: 'vtee'
});

let vteeDBOperations = {};

// for insert into table use this example
vteeDBOperations.insertProfile = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO profile SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Profile ID:', res.insertId);
            resolve(res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert profile: ${err.message}`);
    }
  });
}

vteeDBOperations.insertEducation = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO education SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Education ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert education: ${err.message}`);
    }
  });
}

vteeDBOperations.insertITProficiency = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO it_proficiency SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert IT Proficiency ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert it_proficency: ${err.message}`);
    }
  });
}

vteeDBOperations.insertLanguageProficiency = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO language_proficiency SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Language Proficiency ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert language_proficency: ${err.message}`);
    }
  });
}

vteeDBOperations.insertSkillTraining = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO skill_training SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Skill Training ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert skill_training: ${err.message}`);
    }
  });
}

vteeDBOperations.insertTraditionalSkills = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO traditional_skill SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Traditional Skill ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert traditional_skills: ${err.message}`);
    }
  });
}

vteeDBOperations.insertEmployementData = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO employement_data SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Employement Data ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert employement_data: ${err.message}`);
    }
  });
}

vteeDBOperations.insertInformalWorkExperience = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO informal_sector SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Informal Experience ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert informal_sector: ${err.message}`);
    }
  });
}

vteeDBOperations.insertEmployementInterests = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO employement_interest SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Employement Interests ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert employement_interest: ${err.message}`);
    }
  });
}

vteeDBOperations.insertCapacityDevelopment = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO capacity_development SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Capacity Development ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert capacity_development: ${err.message}`);
    }
  });
}

vteeDBOperations.insertCulturalTalents = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO cultural_interests SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Cultural Interests ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert cultural_interests: ${err.message}`);
    }
  });
}

vteeDBOperations.insertEntrepreneurship = (data)=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('INSERT INTO entrepreneurship SET ?', data, (err, res) => {
            if(err) throw err;
            console.log('Last insert Entrepreneurship ID:', res.insertId);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error doing insert entrepreneurship: ${err.message}`);
    }
  });
}

vteeDBOperations.getEndPoint = ()=>{
  return new Promise((resolve,reject)=>{
    try {
      pool.getConnection((err, conn)=>{
        if (err){
          console.log(err);
        }else{
          conn.query('SELECT * FROM config WHERE flag = 1', (err, res) => {
            if(err) throw err;
            resolve(res);
          });
          conn.release();
        }
      });
    } catch (err) {
      console.log(`Error fetching config data: ${err.message}`);
    }
  });
}

module.exports = vteeDBOperations;
