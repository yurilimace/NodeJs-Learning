var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "teste",
  password: "1234",
  database:"Test_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE User (Name VARCHAR(255), Password VARCHAR(255))";
  con.query(sql,function(err,result){
      if(err) throw err;
      console.log("Table Created");
  });
});
