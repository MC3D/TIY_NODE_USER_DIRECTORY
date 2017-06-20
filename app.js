const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const users = require('./data.js');

// Register the mustache template engine
app.engine('mustache', mustacheExpress());

// Set mustache as the engine to use for our views
app.set('view engine', 'mustache');

// Tell express where are view files are located
app.set('views', './views');

app.get('/', function(req, res){
  var context = users;
  res.render('index', context);
});

app.listen(3000, function() {
  console.log('sucessfully started express application')
});
