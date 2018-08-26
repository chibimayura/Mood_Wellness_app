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
router.get('/dashboard', function(req, res){
	res.render('pages/dashboard');
});

//GET info on meditation status
//GET random info on quotes, foods, and songs based on mood



//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;