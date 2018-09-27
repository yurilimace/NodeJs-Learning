var fs = require('fs');
var cont = 0
fs.readFile(process.argv[2],'utf8',function(err,data){
    if(err) throw err;
    for(var x = 0 ;x<data.length;x++){
        if(data[x] == '\n'){
            cont+=1;
        }
    }
    console.log(cont);
   
});
