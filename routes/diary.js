var express = require('express');
var app = express();
var router = express.Router();

//grab database to store quick diary entries
var mysql = require('mysql');

//body parser to grab POST diary entries
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//grabs router page
router.get('/', function(req, res){
	res.render('pages/diary');
});

router.get('/user_info', function(req, res){
	var user_info = {
		user_id : req.session.user_id,
		user_name : req.session.user_name,
		timestamp : req.session.current_login_date,
		mood_id : req.session.current_mood
	};
	res.json(user_info);
});

// For AJAX query to add old diary entries to page
router.get('/diaryEntries', function(req, res){
    var query = connection.query("SELECT * FROM diaries WHERE user_id = ?",user_info.user_id, function(error, results, body) {
        if (error) throw error;
	    res.json(results);
    });
});

// mysql to add diary entries to the database

router.post('/create', function(req, res){
	console.log(req.body);

	var query = connection.query(
	  "INSERT INTO diaries SET text = ? WHERE user_id = ?",
	  [req.body, user_info.user_id],
	  function(err, response) {
		  if (err) throw error;
		  console.log(req.body);

	    res.redirect('/diary');
	  }
	);
	console.log(query);
});


//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;