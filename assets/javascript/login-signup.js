/*
Things to check valid password, email, and username
*/
var url = window.location.href;

var newInput, newP; //creating new inputs and p tags for signup page, new span for popovers
var canSignUp = false; //checks if user's input meets all requirements
var canEmail = false, canUsername = false; //checks if email or username is available
var formSelector = $('form'); //selects the form on the page

//Input type = even index, input attr = odd index
var newInputInfo = [
	'Email',
	{
		//email input
		'type' : 'text',
		'name' : 'email',
		'placeholder' : 'Enter your e-mail'
	},
	'Username',
	{
		'type' : 'text',
		'name' : 'username',
		'placeholder' : 'Enter your username'
	},
	'Password',
	{
		'type' : 'password',
		'name' : 'password',
		'placeholder' : 'Enter your password'
	},
	'Re-enter password',
	{
		'type' : 'password',
		'name' : 'repassword',
		'placeholder' : 'Re-enter your password'
	}
]

//new button for sign up form
var submitBtn = $('<button>').html('Submit').attr('class', 'btn');
var loginRoute = $('<a>').attr('href', '/').text('Login');

//putting the form onto the page, if on /sign-up route
if(url.includes('/sign-up')){
	$('h1').text('Sign Up');

	formSelector.attr({
		'method' : '',
		'action' : ''
	});

	formSelector.empty();

	for(var i = 0; i < newInputInfo.length; i++){
		//if even index of array put the text into <p>
		if(i % 2 == 0){
			newP = $('<p>');
			newP.text(newInputInfo[i]);
		} else{
			newInput = $('<input>');
			newInput.attr(newInputInfo[i]).attr({
				'id' : newInputInfo[i].name,
				'class' : 'd-inline-block',
				'data-toggle' : 'popover',
				'data-content' : 'Please do not leave this area blank.'
			});
		}

		formSelector.append(newP, newInput);
	}

	formSelector.append(submitBtn, loginRoute).css({
		'background-color' : '#ffffff',
		'border-radius' : '10px',
		'border' : '2px dashed #28a4a4',
		'padding' : '5%',
		'overflow' : 'hidden',
		'margin-top' : '20px'
	});


	//form is preventDefault until meets requirements
	formSelector.submit( function(ev){
		ev.preventDefault();

		//if username and emails are available they can register
		if(canUsername && canEmail){
			formSelector.attr({
				'method' : 'POST',
				'action' : '/signing-up'
			});
			formSelector.unbind('submit').submit();
		}
	});

	//check if input vals are empty
	$(document).on('click', 'button', function(event){

		$('[data-toggle="popover"]').popover('hide');

		if($(this).siblings('#email').val() == ''){
			$('#email').popover('show');
		} else if($(this).siblings('#username').val() == ''){
			$('#username').popover('show');
		} else if($(this).siblings('#password').val() == ''){
			$('#password').popover('show');
		} else if($(this).siblings('#password').val() != $(this).siblings('#repassword').val()){
			$(this).siblings('#repassword').attr('data-content', 'Passwords does not match!').popover('show');
		} else{
			/*
				Ajax to grab database information on users and emails to check if it's used or not
				Check if password and repassword are the same
			*/
			$.ajax({
				url : '/user-database',
				method : 'GET'
			}).then(function(data){
				for(var i = 0; i < data.length; i++){
					if(data[i].email == $('#email').val()){
						$('#email').attr('data-content', 'Email is not available').popover('show');
						canEmail = false;
						break;
					} else{
						$('#email').popover('hide');
						canEmail = true;
					}

					if(data[i].username == $('#username').val()){
						$('#username').attr('data-content', 'Username is not available').popover('show');
						canUsername = false;
						break;
					} else{
						$('#username').popover('hide');
						canUsername = true;
					}
				}
			});
		}
	});
}