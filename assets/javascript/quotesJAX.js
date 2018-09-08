$('#get-another-quote-button').on('click', function(e) {
    $.ajax
    ({
    //API FROM FORISMATIC.COM
        url: "https://api.forismatic.com/api/1.0/?",
        method: "GET",
    //The data type expected of the server response.
        dataType: "jsonp",
    //Specifies data to be sent to the server.
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    //A function to be run when the request succeeds.
        success: function( response ) {
            
            console.log(response);
        
            var ranQuote = response.quoteText + "-" + response.quoteAuthor

            var hiddenInput = $('<input>').attr({
                'name': 'quote',
                'type': 'hidden',
                'value': ranQuote
            })
            
            $("#runquote").html(ranQuote);
            $("#add-quote-button").append(hiddenInput)
            
        
        }
    });
}); 