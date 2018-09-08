var formSelector = $('form');

formSelector.submit(function(ev){
	ev.preventDefault();
	console.log($('select option:selected').text());
	if($('select option:selected').text() != "I'm feeling..."){
		formSelector.unbind('submit').submit();
	}
});