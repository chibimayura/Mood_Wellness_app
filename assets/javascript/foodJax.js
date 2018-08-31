$.ajax({
	url: '/foods/foodsData',
	method: 'GET'
}).then(function(data){
    var p, name, desc;
    for (i=0; i<data.length; i++){
        name = data[i].food_name;
        info = data[i].info;
        likes = data[i].works;
        p = $('<p>');
        p.text(name + ' - ' + info + ' - ' + likes + ' people think it works!');
        $('#foodsHere').append(p);
    }
});