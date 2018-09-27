var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var cont = 0;
for(var x = 0; x< str.length;x++){
    if(str[x] == '\n'){
        cont +=1;
    }
}
console.log(cont);