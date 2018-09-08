var express = require('express');
var app = express();
var router = express.Router();

//grab database to store meditation progress
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "wellness_db"
});

//grabs router page
router.get('/', function(req, res){
	res.render('pages/meditation');
});

//POST meditation if user meditates
//store meditation into database and redirects to meditation page
router.post('/amount-meditated', function(req, res){
	connection.query('SELECT * FROM meditation WHERE user_id = ?', [req.session.user_id], function(error, results, fields){

		if(error) throw error;

		var sameDay; //stores the index/row where the timestamps are the same
		var meditationAmount; //grabs the amount in meditation table and adds to it before updating table
		//grabs the date the user is currently meditating at
		for(var i = 0; i < results.length; i++){
			var dateFormat = results[i].created_at;

			if(JSON.stringify(dateFormat).slice(1,11) == req.session.current_login_date){
				sameDay = i;
				break;
			}
		}
		//stores value of total amount meditated that day
		meditationAmount = parseInt(results[sameDay].amount) + 1;

		//call connection to update table
		connection.query('UPDATE meditation SET did_meditate = ?, amount = ? WHERE user_id = ? AND created_at = ?', [true, meditationAmount, req.session.user_id, dateFormat], function(error){
			if(error) throw error;
			console.log('meditation log updated!');
			res.redirect('/meditation');
		});
	});
});

//stays at the bottom of the file to export this portion to import into server.js
module.exports = router;