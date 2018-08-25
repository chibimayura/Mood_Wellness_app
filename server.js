var express = require("express");
var app = express();

app.set('view engine', 'ejs');

//index page
app.get('/', function(req,res){
	res.render('pages/index');
});

//mood page
app.get('/mood', function(req, res){
	res.render('pages/mood');
});

//quotes page
app.get('/quotes', function(req, res){
	res.render('pages/quotes');
});

//foods page
app.get('/foods', function(req, res){
	res.render('pages/foods');
});

//meditation page
app.get('/meditation', function(req, res){
	res.render('pages/meditation');
});

//favorite page
app.get('/I-Feel-Better', function(req, res){
	res.render('pages/favorites');
});

//diary page
app.get('/dairy', function(){
	res.render('pages/diary');
});

//dashboard page
app.get('/dashboard', function(req, res){
	res.render('pages/dashboard');
});

app.listen(3000, function(){
	console.log('Running the server on PORT 3000');
});