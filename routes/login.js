var express = require('express');
var app = express();
var router = express.Router();
// var bcrypt = require('bcryptjs');

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
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//grabs router page
router.get('/', function(req, res){
	res.render('pages/index');
});

//Sign up
//POST username and password
router.get('/logging-in', function(req, res){

	// res.json(req.query);
	connection.query('SELECT * FROM users WHERE username = ?', [req.query.username], function(error, results, fields){

		if(results[0]){
			console.log(results[0] + 'exists');
			res.redirect('/mood');
		}else {
			console.log('no user found');
			res.redirect('/');
		}

	});

});
//Check password



//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;