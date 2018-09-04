var express = require('express');
var app = express();
var router = express.Router();

//grab database to store quick diary entries
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "wellness_db"
});

//body parser to grab POST diary entries
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//grabs router page
router.get('/', function(req, res){
	
	
	connection.query('SELECT * FROM quotes ORDER BY ranking DESC', function(error, results, fields) {
		
		connection.query('SELECT mood, id FROM moods', function(error, moods, fields) {
			
			res.render('pages/quotes', { results: results, moods: moods})
		})
		
	// });
	}
	)}
);

router.post('/ranking', function(req, res){
	console.log(req.body);

	var updateParams = [req.body.rank, req.body.quote_id];
	var insertParams = [req.body.quote, req.body.mood_id];

	if (req.body.rank) {
		var updateQuery = connection.query(
			"UPDATE quotes SET ranking = ? where id = ? ",
			updateParams,
			function(err, response) {
			  console.log('inserted');
			  res.redirect('/quotes');
			}
		  );
	} else if (req.body.quote) {
		var insertQuery = connection.query(
			"INSERT INTO quotes (quote, mood_id) values (?, ?)",
			insertParams,
			function(err, response) {
			  console.log('inserted');
			  res.redirect('/quotes');
			}
		  );
	}
});

module.exports = router;