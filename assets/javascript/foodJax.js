$.ajax({
	url: '/foods/foodsData',
	method: 'GET'
}).then(function(data){

    // adds data to foods/foodsData route
    var name, likes, upvote, downvote, id, formLikes, formFavorite, favorite, div;
    for (i=0; i<data.length; i++){
        name = data[i].food_name;
        info = data[i].info;
        likes = data[i].works;
        id = parseFloat(i + 1);

        // make div with each food
        div = $('<div>');
        div.html('<b>' + name + '</b><br>' + info + '<br>' + likes + ' people think it works!<br>');

        // make upvote + downvote + favorite buttons
        upvote = $('<button>');
        downvote = $('<button>');
        favorite = $('<button>');

        upvote.attr({
            'name': 'works',
            'value': 1,
            'class': 'btn btn-primary spaceButtons'
        });
        upvote.html('<i class="fa fa-thumbs-up"></i> Agreed!');

        downvote.attr({
            'name': 'works',
            'value': -1,
            'class': 'btn btn-primary spaceButtons'
        });
        downvote.html('<i class="fa fa-thumbs-down"></i> No way!');

        favorite.attr({
            'name' : 'food_id',
            'class' : 'btn btn-danger spaceButtons'
        });
        favorite.html('Favorite')

        formLikes = $('<form>');
        formLikes.attr({
            'method' : 'post',
            'action' : '/foods/update/' + id + '/' + likes,
        });

        formFavorite = $('<form>');
        formFavorite.attr({
            'method' : 'post',
            'action' : '/foods/favorite/' + id,
        });
        

        formLikes.append(upvote).append(downvote);

        formFavorite.append(favorite);

        div.append(formLikes).append(formFavorite);

        $('#foodsHere').append(div);
    }
});