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

  router.get('/dashData', function(req, res){
    connection.query("SELECT quotes.quote, foods.food_name, foods.info FROM quotes, foods ORDER BY RAND()", function(error, results, body) {
		if (error) throw error;
			res.json(results);
    });
});
//GET info on meditation status
//GET random info on quotes, foods, and songs based on mood



//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;