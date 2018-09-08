//Post meditation only after timer is finished and redirect back to meditation page with the new count
//randomize background images when user starts meditation
//randomize songs when user starts meditation

/*
	Credit Music from:
	http://freemusicarchive.org/music/Lee_Rosevere/5_Minute_Meditations/
*/

var randomBgIndex, randomSongIndex; //stores randomly generated index 
var playRandomSong = new Audio(); //plays a random song
var isDoneMeditate = false;
var countDown; //stores the set interval for timer
var seconds, minutes, startTime;

var formSelector = $('#delaySubmit'); //selects the form on the page
var inputSelector = $('.btn');
var timerSelector = $('#timer');
var minuteSelector = $('#minutes');
var secondSelector = $('#seconds');

//setting and interval when the form submits automatically
var intervalTimer = {
	oneMinute : 60000,
	fiveMinutes : 300000,
	tenMinutes : 600000
}

//stores random images for the background
var randomBgArr = [
   '/images/meditation-1.jpg', 
   '/images/meditation-2.jpg', 
   '/images/meditation-3.jpg', 
   '/images/meditation-4.jpg', 
   '/images/meditation-5.jpg'
];

//stores random songs to play
//songs were too long will find short ones
var randomSongArr = [
   '/songs/01.mp3',
   '/songs/02.mp3',
   '/songs/03.mp3',
   '/songs/04.mp3',
   '/songs/05.mp3',
   '/songs/06.mp3',
   '/songs/07.mp3',
   '/songs/08.mp3',
   '/songs/09.mp3',
   '/songs/10.mp3'
];

//hides the timer
timerSelector.hide();

//prevent page default until timer runs out
formSelector.submit( function(ev){
	ev.preventDefault();
});

$(document).on('click', 'input', function(event){
	//grabs the text info of the timer
	startTime = $(this).attr('value');

	randomSong();
	randomBackground();

	//sets the seconds, minutes, and how long the post delay is
	switch(startTime){
		case '1:00':
			minutes = 0;
			seconds = 60;
			//sets a timeout that will unbind the submit so that the form will post
			setTimeout(function(){
				formSelector.unbind('submit').submit();
			}, intervalTimer.oneMinute);
			break;
		case '5:00':
			minutes = 4;
			seconds = 60;
			//sets a timeout that will unbind the submit so that the form will post
			setTimeout(function(){
				formSelector.unbind('submit').submit();
			}, intervalTimer.fiveMinutes);
			break;
			//sets a timeout that will unbind the submit so that the form will post
		case '10:00':
			minutes = 9;
			seconds = 60;
			setTimeout(function(){
				formSelector.unbind('submit').submit();
			}, intervalTimer.tenMinutes);
			break;
	}

	countDown = setInterval(timer, 1000);

	//hides time buttons and header so user will complete their full meditation time
	$('input').hide();
	$('header').hide();
	timerSelector.show();
});

function timer(){
	seconds--;
	minuteSelector.text("0" + minutes);
	secondSelector.text(seconds);
	if(seconds == 0 && minutes == 0){
		secondSelector.text("0" + seconds);
		$('header').show();
		playRandomSong.pause();
		clearInterval(countDown);
		isDoneMeditate = true;
	} else if(seconds <= 0){
		console.log(playRandomSong.ended);
		seconds = 59;
		secondSelector.text(seconds);
		minutes--;
		if(minutes < 10){
			minuteSelector.text("0" + minutes);
		} else {
			minuteSelector.text(minutes);
		}
	} else if(seconds < 10 && seconds > 0){
		secondSelector.text("0" + seconds);
	}

	//if song ends before meditation time is over
	if(playRandomSong.ended){
		randomSong();
	}
}

function randomSong(){
	randomSongIndex = Math.floor(Math.random() * randomSongArr.length);

	//pauses song if there is a song playing and plays a new song else plays a new song
	if(!playRandomSong.paused){
		playRandomSong.pause();
		playRandomSong = new Audio(randomSongArr[randomSongIndex]);
		playRandomSong.play();
	} else {
		playRandomSong = new Audio(randomSongArr[randomSongIndex]);
		playRandomSong.play();
	}
}

function randomBackground(){
	randomBgIndex = Math.floor(Math.random() * randomBgArr.length);

	//displays random background image for meditation
	$('body').css('background-image', 'url('+ randomBgArr[randomBgIndex] +')');
}