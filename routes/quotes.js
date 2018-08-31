var express = require('express');
var app = express();
var router = express.Router();

//grab database to store quick diary entries
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "10Strawberry!",
	database: "wellness_db"
});

//body parser to grab POST diary entries
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//grabs router page
router.get('/', function(req, res){
	
	
	connection.query('SELECT * FROM quotes', function(error, results, fields){

		connection.query('SELECT mood FROM moods', function(error, moods, fields) {
			// console.log(results, moods);
			res.render('pages/quotes', { results: results, moods: moods});
		})
		
	});

});

router.post('/ranking', function(req, res){
	console.log(req.body);
	// console.log(res);
	// res.redirect('/');

	// var query = connection.query(
	//   "INSERT INTO quotes SET ?",
	//   req.body,
	//   function(err, response) {
	//     res.redirect('/');
	//   }
	// );
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