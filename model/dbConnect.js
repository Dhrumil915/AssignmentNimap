var mysql = require('mysql');

/*Connect to database:*/
//Database connection string
var db = mysql.createConnection({
  host: "localhost:8282",
  user: "root",
  password: "root",
  database: "productCrud"
});

//Connection to database
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database!");
});

module.exports = db;