var mongoose = require('mongoose');

var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/shortlydb';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Mondodb connection open');
});

module.exports = db;
