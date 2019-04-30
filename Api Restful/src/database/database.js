const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/check',{useNewUrlParser:true,useFindAndModify: false});
mongoose.Promise = global.Promise;

module.exports = mongoose;