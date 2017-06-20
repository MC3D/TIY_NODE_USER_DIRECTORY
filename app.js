const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data.js');

// Register the mustache template engine
app.engine('mustache', mustacheExpress());

// Set mustache as the engine to use for our views
app.set('view engine', 'mustache');

// Tell express where are view files are located
app.set('views', './views');

app.use('/', express.static('public'));

// static route
app.get('/', function(req, res){
  var context = data;
  res.render('index', context);
});

app.get('/:id', function(req, res) {
  var context = data.users.filter(function(user){
    return user.id == req.params.id;
  })[0];
  res.render('user', context);
})

app.listen(3000, function() {
  console.log('sucessfully started express application')
});
