//Post meditation only after timer is finished and redirect back to meditation page with the new count
//randomize background images when user starts meditation
//randomize songs when user starts meditation

/*
	Credit Music from:
	https://free-meditation-music.com
*/

var randomBgIndex, randomSongIndex; //stores randomly generated index 
var playRandomSong = new Audio(); //plays a random song


var formSelector = $('form'); //selects the form on the page

//stores random images for the background
var randomBgArr = [
   '/images/meditation-1.jpg', 
   '/images/meditation-2.jpg', 
   '/images/meditation-3.jpg', 
   '/images/meditation-4.jpg', 
   '/images/meditation-5.jpg'];

//stores random songs to play
//songs were too long will find short ones
var randomSongArr = [];

$(document).on('click', 'button', function(event){
	//temporary it will allow default after time is up
	event.preventDefault();

	randomBgIndex = Math.floor(Math.random() * randomBgArr.length);
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

	// $('header').hide();
	$('body').css('background-image', 'url('+ randomBgArr[randomBgIndex] +')');
});