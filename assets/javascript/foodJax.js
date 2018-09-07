$.ajax({
	url: '/foods/foodsData',
	method: 'GET'
}).then(function(data){
    var p, name, likes, upvote, downvote, id, formUp, formDown, formLikes;
    for (i=0; i<data.length; i++){
        name = data[i].food_name;
        info = data[i].info;
        likes = data[i].works;
        id = parseFloat(i + 1);

        // make buttons with thumbs up and thumbs down
        upvote = $('<button>');
        downvote = $('<button>');
        upvote.attr({
            'name': 'works',
            'value': 1,
            'class': 'btn btn-primary tinySpaceLikeButtons'
        });
        downvote.attr({
            'name': 'works',
            'value': -1,
            'class': 'btn btn-primary tinySpaceLikeButtons'
        });
        upvote.html('<i class="fa fa-thumbs-up"></i> Agreed!');
        downvote.html('<i class="fa fa-thumbs-down"></i> No way!');

        // make div with each food
        div = $('<div>');
        div.html('<b>' + name + '</b><br>' + info + '<br>' + likes + ' people think it works!<br>');

        formLikes = $('<form>')
        formLikes.attr({
            'method' : 'post',
            'action' : '/foods/update/' + id + '/' + likes,
        });

        formLikes.append(upvote).append(downvote);

        div.append(formLikes);
        $('#foodsHere').append(div);
        $('#foodsHere').append('<br>');

    }
});