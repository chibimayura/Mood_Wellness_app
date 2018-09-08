var formSelector = $('form');
var optionSelector = $('option');

formSelector.submit(function(ev){
	ev.preventDefault();
	console.log(optionSelector.text());
	if(optionSelector.text() != "I'm feeling..."){
		formSelector.unbind('submit').submit();
	}else{
		ev.preventDefault();
	}
});