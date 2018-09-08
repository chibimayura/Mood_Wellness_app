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

//grabs router page
router.get('/', function(req, res){

	connection.query('SELECT * FROM quotes ORDER BY ranking DESC', function(error, results, fields) {
		
		connection.query('SELECT mood, id FROM moods', function(error, moods, fields) {
			
			res.render('pages/quotes', { results: results, moods: moods})
			})
		}
	)}
);

router.post('/add', function(req, res) {

	var quoteParams = [req.body.quote, req.session.current_mood]
	if (req.body.quote) {
		var insertQuote = connection.query(
			"INSERT INTO quotes (quote, mood_id) values (?, ?)",
			quoteParams,
			function(err, response) {
			if (err) throw err 
			  console.log('inserted');
			  res.redirect('/quotes');
			})
	}

});

router.post('/ranking', function(req, res){
	console.log(req.body);

	var updateParams = [req.body.rank, req.body.quote_id];
	var insertParams = [req.body.quote, req.body.mood_id];
	var insertFav = [req.body.favorite_quote_id, req.session.user_id];



	// update quotes table if user thumbs up a quote on page

	if (req.body.rank) {
		var updateQuery = connection.query(
			"UPDATE quotes SET ranking = ? where id = ? ",
			updateParams,
			function(err, response) {
			  console.log('inserted');
			  res.redirect('/quotes');
			}
		  );
	} 
	// inserts new quote submitted by user
	else if (req.body.quote) {
		var insertQuery = connection.query(
			"INSERT INTO quotes (quote, mood_id) values (?, ?)",
			insertParams,
			function(err, response) {
			if (err) throw err 
			  console.log('inserted');
			  res.redirect('/quotes');
			}
		  )
	} else if (req.body.favorite_quote_id) {
		var insertFavTable = connection.query(
		"INSERT INTO quotes_favorites (quote_id, user_id) VALUES ( (SELECT id from quotes WHERE id = ?),  (SELECT id from users WHERE id = ?) )", insertFav, function(err, response) {
			if (err) throw err 
			  console.log('inserted');
			  res.redirect('/quotes');
			}
		  )
	}
});

module.exports = router;