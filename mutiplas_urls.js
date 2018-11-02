//criando um servidor http com Node js onde a requisição esta recebendo várias urls diferentes e respondendo de acordo
//require é como se fosse o import do node

//criando a variavel http que incorpora a biblioteca http
var http = require('http');

//criando o servidor http
//Passa como paramentro uma função que envia uma requisição ao servidor e uma reposta ao cliente
var server = http.createServer(function(req,res){
    //variavél categoria recebe (Recupera a requisição) a url da requisição
    var categoria = req.url;
    //condicionais que checam a url e o servidor responde com a resposta adequada a requisição da porta escutada
    if(categoria == "/1"){
        res.end("Categoria 1");
    }
    else if(categoria == "/2"){
        res.end("Categoria 2");
    }
    else if(categoria =="/3"){
        res.end("Categoria 3");
    }
    //se a url não passar pelas condições o servidor responde com o default cujo a resposta é o hello world
    else{
        res.end("hello World");
    }

});

//Variavel server fica escutando a requisição na porta escolhida nesse caso a 3000
server.listen(3000);