var express = require("express");
var app = express();

var cookieParser = require('cookie-parser');

app.use(cookieParser());
var session = require("express-session");
app.use(session({ secret: 'app', cookie: { maxAge: 1*1000*60*60*24*365 }}));

//to pull other routes into server
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

// making the assets folder static
app.use(express.static("assets"));

//body-parser in the server.js to allow all routes to do post properly
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//grabbing servers
//login page as index
var logInRoute = require('./routes/login.js');
app.use('/', logInRoute);

//Dashboard Page
// var dashboardRoute = require('./routes/dashboard.js');
// app.use('/dashboard', dashboardRoute);

// //Dairy Page
// var diaryRoute = require('./routes/diary.js');
// app.use('/diary', diaryRoute);

// //Favorite Page
// var favoritesRoute = require('./routes/favorites.js');
// app.use('/favorites', favoritesRoute);

// //Food Page
// var foodsRoute = require('./routes/foods.js');
// app.use('/foods', foodsRoute);

// //Meditation Page
// var meditationRoute = require('./routes/meditation.js');
// app.use('/meditation', meditationRoute);

// //daily Mood Page
// var moodRoute = require('./routes/mood.js');
// app.use('/mood', moodRoute);

// //Quotes Page
// var quotesRoute = require('./routes/quotes.js');
// app.use('/quotes', quotesRoute);

app.listen(3000, function(){
	console.log('Running the server on PORT 3000');
});