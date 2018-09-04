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

//GET more suggestion on food based on mood
//POST food that also helps specific mood


// this works, desplays JSON
// router.get('/create', function(req, res){
//     connection.query("SELECT * FROM foods", function(error, results, body) {
//         if (error) throw error;
// 	    res.json(results);
//     });
// });

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

router.post('/upvote/:id', function(req, res){
	console.log(req.body);
	var addVote = req.body.works + 1
	var query = connection.query(
	  "UPDATE foods WHERE id = ?",
	  [addVote, req.params.id],
	  function(err, response) {
		  if (err) throw error;
		  console.log(req.body);

	    res.redirect('/foods');
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