var mysql = require('mysql2');

//db config
var con = mysql.createConnection({
  host: "156.67.222.81",
  user: "u250186539_vtee",
  password: "Vtee@123",
  database: 'u250186539_vtee'
});

// for connect db
con.connect(err => {
  if (err){ console.log("Database not connected :("); throw err;}
  console.log("Database connected :)");
});

let vteeDBOperations = {};

// for select data from table use this example
vteeDBOperations.getAlluser = ()=>{
  return new Promise((resolve,reject)=>{
    con.query('SELECT * FROM users', (err,rows) => {
      if(err) throw err;
      console.log('Data received from Db:');
      console.log(rows);
      resolve(rows)
    });
  })
}

// for insert into table use this example
vteeDBOperations.insertProfile = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO profile SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert ID:', res.insertId);
      resolve(res.insertId);
    });
  })
}

module.exports = vteeDBOperations;
