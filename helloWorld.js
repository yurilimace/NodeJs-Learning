//criando um servidor http com Node js (Hello World)
//require é como se fosse o import do node

//criando a variavel http que incorpora a biblioteca http
var http = require('http');

//criando o servidor http
//Passa como paramentro uma função que envia uma requisição ao servidor e uma reposta ao cliente
var server = http.createServer(function(req,res){
    //.end é a resposta enviada ao cliente
    res.end("hello world");

});

//Variavel server fica escutando a requisição na porta escolhida nesse caso a 3000
server.listen(3000);