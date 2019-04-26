const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/check',{useNewUrlParser:true});
mongoose.Promise = global.Promise;

module.exports = mongoose;