var express = require("express");
var app = express();

//to pull other routes into server
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

//grabbing servers
var dashboardRoute = require('./routes/dashboard.js');
app.use('/dashboard', dashboardRoute);

var diaryRoute = require('./routes/diary.js');
app.use('/diary', diaryRoute);

var favoritesRoute = require('./routes/favorites.js');
app.use('/favorites', favoritesRoute);

var foodsRoute = require('./routes/foods.js');
app.use('/foods', foodsRoute);

var meditationRoute = require('./routes/meditation.js');
app.use('/meditation', meditationRoute);

var moodRoute = require('./routes/mood.js');
app.use('/mood', moodRoute);

var quotesRoute = require('./routes/quotes.js');
app.use('/quotes', quotesRoute);

var songRoute = require('./routes/songs.js');
app.use('/songs', songRoute);

app.listen(3000, function(){
	console.log('Running the server on PORT 3000');
});