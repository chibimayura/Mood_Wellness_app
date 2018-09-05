var id = window.location.href.split('/upvote/')[1];

var id = window.location.href.split('/upvote/')[1];
$.ajax({
    url: '/foods/upvote/' + id,
    method: 'GET'
}).then(function(data){

    // $('form').attr('action', '/update/' + id);

    console.log(data);
});

