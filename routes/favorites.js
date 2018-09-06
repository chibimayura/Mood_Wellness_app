var express = require('express');
var app = express();
var router = express.Router();

//grab database to store quick diary entries
var mysql = require('mysql');

//body parser to grab POST diary entries
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//grabs router page
router.get('/', function(req, res){
	res.render('pages/favorites');
});

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

	connection.query("SELECT quote, user_id, mood_id, section FROM favorites as f JOIN user as u on f.user_id = u.id JOIN moods as m on f.mood_id = m.id where m.mood = ?", req.body.mood, function(error, favorites, fields) {
			
			res.render('pages/favorites', { favorites: favorites})
			})
	}
);



//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;