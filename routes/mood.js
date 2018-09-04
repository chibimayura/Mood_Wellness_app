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
	res.render('pages/mood');
});

//POST mood of the day of user to history
router.post('/post-mood', function(req, res){
	connection.query('INSERT INTO histories SET user_id = ?, mood_id = ?',[req.session.user_id, req.body.mood_id], function(error, results){
		if(error) throw error;

		var current_logged_date = new Date();
		req.session.current_login_date = JSON.stringify(current_logged_date).slice(1,11);
		req.session.current_mood = req.body.mood_id;
		res.redirect('/dashboard');
	});
});

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;