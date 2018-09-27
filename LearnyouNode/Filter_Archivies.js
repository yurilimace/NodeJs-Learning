var fs = require('fs');
fs.readdir(process.argv[2],function(err,list){
    if(err) throw err;
    for(var x = 0; x<list.length;x++){
        for(var j =0;j<list[x].length;j++){
            if(list[x][j] == '.'){
                var aux = list[x].substring(j+1);
                if(aux == "md")
                {
                    console.log(list[x]);
                }
            }  
        }        
    }
});