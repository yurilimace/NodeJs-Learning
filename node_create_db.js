var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "teste",  
password: "1234"  
});  

con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
con.query("CREATE DATABASE Test_db", function (err, result) {  
if (err) throw err;  
console.log("Database created");  
});  
});  