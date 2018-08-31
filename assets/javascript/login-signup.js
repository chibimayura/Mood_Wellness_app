/*
Things to check valid password, email, and username
*/
var url = window.location.href;

var newInput, newP;
var formSelector = $('form');

var newInputAttr = [
	{
		//email input
		'type' : 'text',
		'name' : 'email',
		'placeholder' : 'Enter your e-mail'
	},
	{
		'type' : 'text',
		'name' : 'username',
		'placeholder' : 'Enter your username'
	},
	{
		'type' : 'password',
		'name' : 'password',
		'placeholder' : 'Enter your password'
	},
	{
		'type' : 'password',
		'name' : 'repassword',
		'placeholder' : 'Re-enter your password'
	}
]

var newPInfo = ['E-mail', 'Username', 'Password', 'Re-enter password'];

var submitBtn = $('<button>').text('Submit').attr('class', 'btn').hide();

if(url.includes('/sign-up')){
	$('h1').text('Sign Up');

	formSelector.attr('action', '/signing-up');

	formSelector.empty();

	for(var i = 0; i < newPInfo.length; i++){
		newInput = $('<input>');
		newP = $('<p>');

		newInput.attr(newInputAttr[i]);
		newP.text(newPInfo[i])

		formSelector.append(newP, newInput);
	}

	formSelector.append(submitBtn).css({
		'background-color' : '#ffffff',
		'border-radius' : '10px',
		'border' : '2px dashed #28a4a4',
		'padding' : '10% 5%',
	});
}

/*
	Ajax to grab database information on users and emails to check if it's used or not
	Check if password and repassword are the same
*/

$.ajax([
	
	]).then();