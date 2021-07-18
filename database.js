var mysql = require('mysql2');

//db config
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Akhiljith@My112",
  database: 'vtee'
});

// for connect db
con.connect(err => {
  if (err){ console.log("Database not connected :("); throw err;}
  console.log("Database connected :)");
});

let vteeDb = {};

// for select data from table use this example
vteeDb.getAlluser = ()=>{
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
vteeDb.insertOne = (data)=>{
  return new Promise((resolve,reject)=>{
    con.query('INSERT INTO users SET ?', data, (err, res) => {
      if(err) throw err;
      console.log('Last insert ID:', res.insertId);
    });
  })
}

module.exports = vteeDb;
