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
	console.log(req.body);
	connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [req.body.username, req.body.password], function(error, results, fields){
		if(error) throw error;

		if(results.length == 0){
			res.redirect('/sign-up');
		}else {
			// res.json(results[0].id);
			//grabs user's info
			req.session.user_id = results[0].id;
			req.session.user_name = results[0].username;

			res.redirect('/mood');
		}
	});

});

//GET stores the user logged in in the current session
router.get('/user/:id', function(req, res){
	var user_info = {
		user_id : req.session.user_id,
		user_name: req.session.user_name
	}
	if(req.session.user_id == null){
		res.redirect('/sign-up');
	} else{
		res.json(user_info);
	}
});

/*
	Sign up to Wellness app Routes
*/
router.get('/sign-up', function(req, res){
	//using same index template but changing the h1 and form to get sign-up information
	res.render('pages/index');
});

router.post('/signing-up', function(req, res){

	connection.query('INSERT INTO users SET username = ?, email = ?, password = ?', [req.body.username, req.body.email, req.body.password], function(error, results){
		if(error) throw error;

		res.redirect('/');
	});
});

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;