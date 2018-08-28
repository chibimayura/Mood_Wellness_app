var express = require("express");
var app = express();

//to pull other routes into server
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

//grabbing servers

var logInRoute = require('./routes/login.js');
app.use('/', logInRoute);

//Dashboard Page
var dashboardRoute = require('./routes/dashboard.js');
app.use('/dashboard', dashboardRoute);

//Dairy Page
var diaryRoute = require('./routes/diary.js');
app.use('/diary', diaryRoute);

//Favorite Page
var favoritesRoute = require('./routes/favorites.js');
app.use('/favorites', favoritesRoute);

//Food Page
var foodsRoute = require('./routes/foods.js');
app.use('/foods', foodsRoute);

//Meditation Page
var meditationRoute = require('./routes/meditation.js');
app.use('/meditation', meditationRoute);

//daily Mood Page
var moodRoute = require('./routes/mood.js');
app.use('/mood', moodRoute);

//Quotes Page
var quotesRoute = require('./routes/quotes.js');
app.use('/quotes', quotesRoute);

//Songs Page
var songRoute = require('./routes/songs.js');
app.use('/songs', songRoute);

app.listen(3000, function(){
	console.log('Running the server on PORT 3000');
});