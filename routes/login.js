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
	console.log(req);
	connection.query('SELECT * FROM users WHERE username = ?', [req.query.username], function(error, results, fields){
		if(error) throw error;
		if(results.length == 0){
			res.redirect('/');
		}else {
			// res.json(results[0].id);
			//grabs user's info
			req.session.user_id = results[0].id;
			req.session.user_name = results[0].username;

			console.log(req.session.user_id);
			res.redirect('/mood');
		}
	});

});

router.get('/test', function(req, res){
	req.session.state = 'alabama';
	res.send('session set');
})

router.get('/testt', function(req, res){
	res.send(req.session.state)
})

//POST stores the user logged in in the current session
router.get('/user/:id', function(req, res){
	var user_info = {
		user_id : req.session.user_id,
		user_name: req.session.user_name
	}
	if(req.session.user_id == null){
		res.redirect('/signup');
	} else{
		res.json(user_info);
	}
});

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;