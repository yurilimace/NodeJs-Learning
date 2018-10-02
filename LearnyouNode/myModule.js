var fs = require('fs');
var path = require('path');

module.exports = function(dir,ext,callback){
    fs.readdir(dir,function(err,list){
        if(err){
            return callback(err);
        }
        function File_filter (value){
            /*path.extname return the extension of the file in this case check every extension of every file in array list*/
            return path.extname(value) == '.' + ext

        }

    list = list.filter(File_filter);   
    callback(null,list);
    
    });
}