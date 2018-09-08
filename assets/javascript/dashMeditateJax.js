$.ajax({
	url: '/dashboard/dashDataMeditate',
	method: 'GET'
}).then(function(data){
        var meditated, amount, p;
           
        if (data.did_meditate == 0){
            meditated = 'No';
            amount = 0;
        } else if (data.did_meditate == 1){
            meditated = 'Yes';
            amount = data.amount;
        }
            
        // put meditation data on dashboard page

        p = $('<p>');
        p.text(meditated + ', ' + amount + ' minutes meditated today!')
       
        $('#meditatedToday').prepend(p);
    
});