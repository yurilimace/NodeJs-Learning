var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2],function(err,list){
    if(err) throw err;
    function Filter_file(value){
        return path.extname(value) == '.' + 'md' 
    }
    list = list.filter(Filter_file);
    /* prints all elements of the array */
    list.forEach(function(file){
        console.log(file);
    });
});