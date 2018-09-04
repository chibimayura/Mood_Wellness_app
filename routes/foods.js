var express = require('express');
var app = express();
var router = express.Router();

//grab database to store quick diary entries
var mysql = require('mysql');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

	var query = connection.query(
	  "INSERT INTO foods SET ?",
	  req.body,
	  function(err, response) {
		  if (err) throw error;
		  console.log(req.body);

	    res.redirect('/foods');
	  }
	);
	console.log(query);
});


// upvote function
router.post('/upvote/:id', function(req, res){
	console.log(req.body);
	var addVote = JSON.stringify(parseFloat(req.body.works));
	var query = connection.query(
	  "UPDATE foods SET works = ? WHERE id = ?",
	  [addVote, req.params.id],
	  function(err, response) {
		  if (err) throw error;
		  console.log(req.body);

	    res.redirect('/foods/');
	  }
	);
	console.log(query);
});

// downvote function
router.post('/downvote/:id', function(req, res){
	console.log(req.body);
	var removeVote = JSON.stringify(parseFloat(req.body.works));
	var query = connection.query(
	  "UPDATE foods SET works = ? WHERE id = ?",
	  [removeVote, req.params.id],
	  function(err, response) {
		  if (err) throw error;
		  console.log(req.body);

	    res.redirect('/foods/');
	  }
	);
	console.log(query);
});

// app.post('/update/:id', function(req, res){
// 	var query = connection.query(
// 	  "UPDATE questions SET ? WHERE id = ?",
// 	  [req.body, req.params.id],
// 	  function(err, response) {
// 	    res.redirect('/');
// 	  }
// 	);
// });


//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;