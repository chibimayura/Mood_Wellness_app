$.ajax({
	url: '/diary/diaryEntries',
	method: 'GET'
}).then(function(data){
        var text, user_id, created_at, id, div;
        for (i=0; i<data.length; i++){
        text = data[i].text;
        user_id = data[i].user_id;
        created_at = data[i].created_at;
    
        // make div with old entries
        div = $('<div>');
        div.html('<b>' + created_at + '</b><br>' + text + '<br><br>');
        
        // add divs to page
        $('#journalsHere').append(div);
    }
});