var express = require('express');
var app = express();
var router = express.Router();

//grab database to store quick diary entries
var mysql = require('mysql');

//body parser to grab POST diary entries
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//grabs router page
// router.get('/', function(req, res){
// 	res.render('pages/favorites');
// });

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "wellness_db"
});

//GET info on meditation record
//GET favorite info on quotes, foods, and songs based on mood

router.get('/', function(req, res){

	

	connection.query("SELECT * FROM foods JOIN foods_favorites on foods.id = foods_favorites.food_id where foods_favorites.user_id = ?", [req.session.user_id], function(error, foods, fields) {
		
		connection.query("SELECT * FROM quotes JOIN quotes_favorites on quotes.id = quotes_favorites.quote_id where quotes_favorites.user_id = ?", [req.session.user_id], function(error, quotes, fields) {
			console.log(foods, quotes);
			res.render('pages/favorites', { foods: foods, quotes: quotes})
		
		})
	})
});

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;