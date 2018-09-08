var express = require('express');
var app = express();
var router = express.Router();

//grab database to store quick diary entries
var mysql = require('mysql');

// connects to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "wellness_db"
  });

// grabs router page
router.get('/', function(req, res){
    res.render('pages/foods');
});

// For AJAX query to add foods to page
router.get('/foodsData', function(req, res){
    connection.query("SELECT * FROM foods", function(error, results, body) {
        if (error) throw error;
	    res.json(results);
    });
});

// mysql to add food to the database

router.post('/create', function(req, res){
	console.log(req.body);

	var createQuery = connection.query(
	  "INSERT INTO foods SET ?",
	  req.body,
	  function(err, response) {
		  if (err) throw error;
		  console.log(req.body);

	    res.redirect('/foods');
	  }
	);
	console.log(createQuery);
});


// upvote + downvote function

router.post('/update/:id/:works', function(req, res){

	var upDownQuery = connection.query(
	  "UPDATE foods SET works = ? WHERE id = ?",
	  [parseFloat(req.body.works) + parseFloat(req.params.works), req.params.id],
	  	function(err, response) {
			if (err) throw error;
	    	res.redirect('/foods/');
	  }
	);
});

// add favorite food

router.post('/favorite/:id', function(req, res){
var favQuery = connection.query(
	"INSERT INTO foods_favorites (food_id, user_id) VALUES ( (SELECT id from foods WHERE id = ?),  (SELECT id from users WHERE id = ?) )", [req.params.id, req.session.user_id], function(err, response) {
		if (err) throw err 
			res.redirect('/foods');
	}
)});

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;