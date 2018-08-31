var express = require('express');
var app = express();
var router = express.Router();

//grab database to store quick diary entries
var mysql = require('mysql');

//body parser to grab POST diary entries
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

router.get('/foodsData', function(req, res){
    connection.query("SELECT * FROM foods", function(error, results, body) {
        if (error) throw error;
	    res.json(results);
    });
});

//GET more suggestion on food based on mood
//POST food that also helps specific mood



//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;