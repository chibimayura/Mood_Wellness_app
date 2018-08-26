var express = require("express");
var app = express();

//to pull other routes into server
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

//grabbing servers
var quotesRoute = require('./routes/quotes.js');
var dashboardRoute = require('./routes/dashboard.js');
var meditationRoute = require('./routes/meditation.js');
var foodsRoute = require('./routes/foods.js');
var favoritesRoute = require('./routes/favorites.js');
var diaryRoute = require('./routes/diary.js');
var moodRoute = require('./route/mood.js');

//index page
app.get('/', function(req,res){
	res.render('pages/index');
});

app.listen(3000, function(){
	console.log('Running the server on PORT 3000');
});