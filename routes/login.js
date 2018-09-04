var express = require('express');
var app = express();
var router = express.Router();
// var bcrypt = require('bcryptjs');

//grab database to store quick diary entries
var mysql = require('mysql');

//creating connection to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "wellness_db"
});

//grabs router page
router.get('/', function(req, res){
	res.render('pages/index');
});

//POST username and password
router.post('/logging-in', function(req, res){

	connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [req.body.username, req.body.password], function(error, results, fields){
		if(error) throw error;

		if(results.length == 0){
			res.redirect('/sign-up');
		}else {
			//grabs user's info
			req.session.user_id = results[0].id;
			req.session.user_name = results[0].username;

			//grabs login date and stores into session to check if already logged mood that day and only add amount of time meditated that day
			var currentLoginDate = new Date();
			currentLoginDate = JSON.stringify(currentLoginDate).slice(1,11);
			req.session.login_time = currentLoginDate;

			//checks if user logged their mood today
			connection.query('SELECT created_at, mood_id FROM histories WHERE user_id = ?', [req.session.user_id], function(error, results, fields){

				if(results.length == 0){
					//creating a new meditation log
					connection.query('INSERT INTO meditation SET user_id = ?', [req.session.user_id], function(error, results){
						console.log('created meditation log starting at 0 times meditated');
						res.redirect('/mood');
					})
				} else {
					//checks last login date for comparison with current login time
					var lastLoginDate = JSON.stringify(results[results.length-1].created_at).slice(1,11);

					if(lastLoginDate == currentLoginDate){
						req.session.current_mood = results[results.length-1].mood_id;
						req.session.current_login_date = lastLoginDate;
						res.redirect('/dashboard');
					} else{
						//creating a new meditation log
						connection.query('INSERT INTO meditation SET user_id = ?', [req.session.user_id], function(error, results){
							console.log('created meditation log starting at 0 times meditated');
							res.redirect('/mood');
						})
					}
				}

			});

		}
	});

});

//GET stores the user logged in in the current session
router.get('/user_info', function(req, res){
	var user_info = {
		user_id : req.session.user_id,
		user_name : req.session.user_name,
		timestamp : req.session.current_login_date,
		mood_id : req.session.current_mood
	}
	if(req.session.user_id == null){
		res.redirect('/sign-up');
	} else{
		res.json(user_info);
	}
});

//GET users info to check with sign-up page, only display email and username
router.get('/user-database', function(req, res){
	connection.query('SELECT id, username, email FROM users', function(error, results){
		res.json(results);
	});
});

/*
	Sign up to Wellness app Routes
*/
router.get('/sign-up', function(req, res){
	//using same index template but changing the h1 and form to get sign-up information
	connection.query('SELECT username, email FROM users', function(error, results, fields){
		res.render('pages/index');
	});
});

router.post('/signing-up', function(req, res){

	connection.query('INSERT INTO users SET username = ?, email = ?, password = ?', [req.body.username, req.body.email, req.body.password], function(error, results){
		if(error) throw error;

		res.redirect('/');
	});
});

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;