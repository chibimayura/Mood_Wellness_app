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
	
	
	connection.query('SELECT * FROM quotes', function(error, results, fields){
		res.render('pages/quotes', { results: results}
		// connection.query('SELECT mood FROM moods', function(error, moods, fields) {
		// 	// console.log(results, moods);
		// 	res.render('pages/quotes', { results: results, moods: moods});
		// });
		
	// });
	)}
	)}
);

router.post('/ranking', function(req, res){
	console.log(req.body);

	var params = [req.body.rank, req.body.quote_id];
	var query = connection.query(
	  "UPDATE quotes SET ranking = ? where id = ? ",
	  params,
	  function(err, response) {
		console.log('inserted');
		res.redirect('/quotes');
	  }
	);
});

// app.post('/create-quote', function(req, res){
// 	console.log(req.body);


// 	// var query = connection.query(
// 	//   "INSERT INTO quotes SET ?",
// 	//   req.body,
// 	//   function(err, response) {
// 	//     res.redirect('/');
// 	//   }
// 	// );
// })

//GET quotes based on mood & ranking
//POST quotes related to mood

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;