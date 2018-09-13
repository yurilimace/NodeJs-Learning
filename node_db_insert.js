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
  var sql = "INSERT INTO user (Name,Password) VALUES ('user_test','1234')";
  con.query(sql,function(err,result){
      if(err) throw err;
      console.log("1 Insert Created");
  });
});
