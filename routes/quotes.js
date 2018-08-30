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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//grabs router page
router.get('/', function(req, res){
	
	
	connection.query('SELECT * FROM quotes', function(error, results, fields){
			console.log(results);
			res.render('pages/quotes', { results: results});
	});

});

//GET quotes based on mood & ranking
//POST quotes related to mood

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;