$.ajax({
	url: '/dashboard/dashData',
	method: 'GET'
}).then(function(data){

    // adds data to dashboard/dashData route
	var quote, food, foodInfo, randFood, randQuote, threeQuotes, threeFoods;

	// gets all the data and JSONs it

    for (var i=0; i<data.length; i++){
		quote = data[i].quote;
		food = data[i].food_name;
		foodInfo = data[i].info;
	}

	// selects first three from database, ordered randomly - see dashboard.js

	for (var j=0; j<3; j++){

		food = data[j].food_name;
		foodInfo = data[j].info;
		quote = data[j].quote;

		threeQuotes = $('<p>');
		threeQuotes.append(quote);
		$('#randQuotes').append(threeQuotes);

		threeFoods = $('<p>');
		threeFoods.append(food).append(' - ').append(foodInfo);
		$('#randFoods').append(threeFoods);

	}
});





//using ajax to grab specific data from where data is posted url
//grab one random data from quotes
	//url: '/quotes'
//grab one random data from foods
	//url: '/foods'
//show user if they meditated today
	//url: '/meditation'

//allow user to post dairy entry and store into data base which clears form but does not redirect user from page