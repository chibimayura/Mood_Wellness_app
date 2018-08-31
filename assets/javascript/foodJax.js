$.ajax({
	url: '/foods/foodsData',
	method: 'GET'
}).then(function(data){
    var p, name, desc;
    for (i=0; i<data.length; i++){
        name = data[i].food_name;
        desc = data[i].description;
        p = $('<p>');
        p.text(name + ' - ' + desc);
        $('#foodsHere').append(p);
    }
});