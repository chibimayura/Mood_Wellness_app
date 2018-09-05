var express = require('express');
var app = express();
var router = express.Router();

//grab database to store meditation progress
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
	res.render('pages/meditation');
});

//store meditation into database and redirects to meditation page
router.post('/amount-meditated', function(req, res){
	// connection.query('');
	res.redirect('/meditation');
});

//POST meditation if user meditates

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;