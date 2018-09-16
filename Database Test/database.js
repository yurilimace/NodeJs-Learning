var teste;
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: ('teste'),
    password: '1234',
    database: 'Test_db'
});

connection.connect(function (err){
    if(err) throw err;
    console.log("Conectado");
    Teste = "Conectado";
});

module.exports.connection = connection;
module.exports.teste = teste;