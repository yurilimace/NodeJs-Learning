
var test = require('./myModule.js');
var dir = process.argv[2];
var ext = process.argv[3];

test(dir,ext,function(err,list){
    if(err){
        return console.error(err);
    }
    list.forEach(function(file) {
        console.log(file);
    });
});