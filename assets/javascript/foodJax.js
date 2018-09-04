$.ajax({
	url: '/foods/foodsData',
	method: 'GET'
}).then(function(data){
    var p, name, likes, upvote, downvote, id;
    for (i=0; i<data.length; i++){
        name = data[i].food_name;
        info = data[i].info;
        likes = data[i].works;
        id = i + 1;
        upvote = $('<a>');
        downvote = $('<a>');
        upvote.attr('name', 'works');
        upvote.attr('value', '1');
        downvote.attr('name', 'works');
        downvote.attr('value', '-1');
        upvote.text('👍');
        downvote.text('👎');
        upvote.attr('href', '/foods/upvote/' + id);
        downvote.attr('href', '/foods/downvote/' + id);
        p = $('<p>');
        p.html('<b>' + name + '</b><br>' + info + '<br>' + likes + ' people think it works!');
        p.append(upvote);
        p.append(downvote);
        $('#foodsHere').append(p);
    }
});