$.ajax({
	url: '/foods/foodsData',
	method: 'GET'
}).then(function(data){
    var p, name, likes, upvote, downvote, id, formUp, formDown;
    for (i=0; i<data.length; i++){
        name = data[i].food_name;
        info = data[i].info;
        likes = data[i].works;
        id = parseFloat(i + 1);

        // make buttons with thumbs up and thumbs down
        upvote = $('<button>');
        downvote = $('<button>');
        upvote.attr('name', 'works');
        upvote.attr('value', 1);
        downvote.attr('name', 'works');
        downvote.attr('value', -1);
        upvote.html('<i class="fa fa-thumbs-up"></i> Agreed!');
        downvote.html('<i class="fa fa-thumbs-down"></i> No way!');
        upvote.attr('class', 'btn btn-primary tinySpace');
        downvote.attr('class','btn btn-primary tinySpace');

        // make div with each food
        div = $('<div>');
        div.html('<b>' + name + '</b><br>' + info + '<br>' + likes + ' people think it works!<br>');

        // make buttons into forms that modify the db
        formUp = $('<form>')
        formUp.attr('method', 'POST');
        formUp.attr('action', '/foods/upvote/' + id + '/' + likes);
        formUp.append(upvote);

        formDown = $('<form>');
        formDown.attr('method', 'POST');
        formDown.attr('action', '/foods/downvote/' + id + '/' + likes);
        formDown.append(downvote);

        
        div.append(formUp);
        div.append(formDown);
        $('#foodsHere').append(div);
        $('#foodsHere').append('<br>');

    }
});