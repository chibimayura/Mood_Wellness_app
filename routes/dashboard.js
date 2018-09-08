var express = require('express');
var app = express();
var router = express.Router();
app.set('view engine', 'ejs');

//grab database to store quick diary entries
var mysql = require('mysql');

//body parser to grab POST diary entries
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//grabs router page
router.get('/', function(req, res){
	res.render('pages/dashboard');
});

// connects to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "wellness_db"
  });

	//GET random info on quotes, foods, and songs based on mood

  router.get('/dashData', function(req, res){
    connection.query("SELECT quotes.mood_id, quotes.quote, foods.mood_id, foods.food_name, foods.info FROM quotes, foods ORDER BY RAND()", function(error, results, body) {
		if (error) throw error;
			res.json(results);
    });
});

// add diary entries to diary page but redirect to dashboard

router.post('/create', function(req, res){
	console.log(req.body);
	console.log(req.session.user_id);
	var query = connection.query("INSERT INTO diaries SET text = ?, user_id = ?",[req.body.text, req.session.user_id],
	  function(err, response) {
		  if (err) throw err;
		  console.log(req.body);
	    res.redirect('/dashboard');
	  }
	);
});

//GET info on meditation status

router.get('/dashDataMeditate', function(req, res){
	connection.query("SELECT did_meditate, amount FROM meditation WHERE user_id = ?", req.session.user_id, function(error, results, body) {
	if (error) throw error;
		res.json(results[0]);
	});
});

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;