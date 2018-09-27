var resultado = 0;
for(var x = 2;x<process.argv.length;x++){
    var temp = Number(process.argv[x]);
    resultado += temp;    
}

console.log(resultado);