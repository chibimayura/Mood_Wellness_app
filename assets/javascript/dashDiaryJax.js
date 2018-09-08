$.ajax({
	url: '/diary/diaryEntries',
	method: 'GET'
}).then(function(data){
        var text, user_id, created_at, id, p;
            for (i=0; i<data.length; i++){
            id = data[i].id;
            text = data[i].text;
            user_id = data[i].user_id;
            created_at = data[i].created_at;
            
            // make div with old entries

            div = $('<div>');
            div.html('<b>' + created_at.split('T')[0] + '<br>' + created_at.split('T')[1] + '</b><br><div>' + text + '</div>');
            div.attr('class', 'oldDiaryEntries');
            
            // add divs to page
                
            $('#diaryEntriesHere').append(div);
    }
});