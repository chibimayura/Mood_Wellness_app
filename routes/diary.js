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
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//grabs router page
router.get('/', function(req, res){
	res.render('pages/diary');
});

// For AJAX query to add old diary entries to page
router.get('/diaryEntries', function(req, res){
    var query = connection.query("SELECT * FROM diaries WHERE user_id = ? ORDER BY created_at DESC",[req.session.user_id], function(error, results, body) {
        if (error) throw error;
	    res.json(results);
    });
});

// mysql to add diary entries to the database

router.post('/create', function(req, res){
	console.log(req.body);
	console.log(req.session.user_id);
	var query = connection.query("INSERT INTO diaries SET text = ?, user_id = ?",[req.body.text, req.session.user_id],
	  function(err, response) {
		  if (err) throw err;
		  console.log(req.body);
	    res.redirect('/diary');
	  }
	);
});

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;