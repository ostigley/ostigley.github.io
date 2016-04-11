// var audio = new Audio('scripts/revs.mp3');
// audio.play();


//   Initiate GAME PLAY!   

//____________________________________________________________________________________

confirm('Use the arrow keys to move and the spacebar to shoot. \nTake out those tie-fighters!')

//___________________________________________________________________________________


//  Start function:   This function sets initial positions to the start point of the table.  And resets active positions to "". 
var start = function() {
	


	//  clear active positions from the board. 
	var positions = document.querySelectorAll(".active");
	for (i=positions.length-1; i>-1 ; i--) {
	//iteration is reversed because the position array reduces in size by 1 each iteration. 
		positions[i].classList.remove("active");
	}


	//  clear othercars from the board. 
	positions = document.querySelectorAll(".othercars");
	for (i=positions.length-1; i>-1 ; i--) {
	//iteration is reversed because the position array reduces in size by 1 each iteration. 
		positions[i].classList.remove("othercars");
	}

	//  Put players back to start position. 
	document.querySelectorAll('.startingBlock')[0].classList.add('active')
	 

	////    traffic light function here. 
	var lights = [".light1",".light2",".light3"];
	
	var counter=0;
	var turngreen = function(light) {
		L = document.querySelectorAll(light);
		for(i=0; i<L.length; i++ ) {
			L[i].classList.remove('redlight');
			L[i].classList.add('greenlight');
		}
		counter++

		var countdown = document.querySelectorAll('.counter');
		// countdown_text = document.createTextNode(toString((3-counter)));
		for (i=0; i<countdown.length; i++) {	
			countdown[i].innerHTML = 3-counter;
		}

		if (counter >2) {
			intervalAddCar = window.setInterval(addCars, 200);
			intervalmoveCarsDown = window.setInterval(moveCarsDown, 100);
			intervalCarCrash = window.setInterval(carCrash, 10);
			intervalBlaster = window.setInterval(blasterMove,30);
			return document.addEventListener("keyup", keypress, false);
		} else {
			return window.setTimeout(turngreen, 1000,lights[counter]);
		}
	}
	window.setTimeout(turngreen, 1000,lights[0]);

	finisher = false;
	//   initiate event listener for movements
	setPos();
	
	}


//  Set position: function to update position of players in Player object. 

var setPos = function () {
	// re-initialise position and lane properties player object. 
	players['Player 1'].position = document.getElementsByClassName(' active')[0];
	//use slice below to make sure lane number is entered in object as a number, not NAN. 
	players['Player 1'].lane = Number(players['Player 1'].position.classList[0].slice(1));
}

var finished = function(carCrashBoolean) {
//Check if player has crossed the finishe line.  Ask for new game.  Update score. 
	var finishActions = function() { 
		finisher = true;
		//turn off event listeners
		document.removeEventListener("keyup", keypress, false)

		// Turn lights red all at the same time
		L = document.querySelectorAll(".light1, .light2, .light3");
		for(i=0; i<L.length; i++ ) {
			L[i].classList.remove('greenlight');
			L[i].classList.add('redlight')
		}

		// turn off red cars
		window.clearInterval(intervalAddCar);
		window.clearInterval(intervalmoveCarsDown);
		window.clearInterval(intervalCarCrash);
		window.clearInterval(intervalBlaster);




		
	
	}
	
	if (carCrashBoolean) {
		// stops game, updates score and alerts players if carcrash has happened
		players['Player 1'].score--;
		finishActions();

		var replay = confirm("You're hit!!  Do you want to try harder? \n\n The rebels need you!");
		if (replay) {
			start();
		}
	} else if (players['Player 1'].position.parentNode.classList.contains("finish")) {
		// stops game, updates score and alerts player crosses finish line!
		players['Player 1'].score++;
		finishActions();

		//Ask to replay. 
		var replay = confirm("Way to go!!!\n Again?");
		if (replay) {
			start();
		}
	}
};

var updatePosition = function (direction,otherCarLane, redCar) {
		var playerPosition = players['Player 1'].position;


	var removeOldPosition = function (position, class2remove){
		position.classList.remove(class2remove);
	};

	switch (direction) {

		case 'left':
			if (!laneBoundries.check('left')) {
				playerPosition.previousSibling.classList.add('active'); 
				removeOldPosition(playerPosition, "active");
			}
			break;
		case 'right':
			if (!laneBoundries.check('right')) {
				playerPosition.nextSibling.classList.add('active');
				removeOldPosition(playerPosition, "active");
			}
			break;
		case 'up':
			playerPosition.parentNode.previousSibling.childNodes[players['Player 1'].lane].classList.add("active")
			removeOldPosition(playerPosition, "active");
			break;
		case 'down':
			// 'player' parameter here is actually the position of the red car.  move down if not at start
			if(redCar.parentNode.classList[0] != 'start') {
				redCar.parentNode.nextSibling.childNodes[otherCarLane].classList.add("othercars");
				removeOldPosition(redCar, "othercars");
			} else {
				redCar.classList.remove('othercars');
			}
			break;
		};

	// re-initialise position variables in pplayer object. 
	setPos();

	//check if finished, if update position function has been called to move a player (not a red car):
	finished();
	
}

var keypress = function (key) {
	if (!finisher) {
		var k = key.which;
		switch (k) {
			case 37: 
			updatePosition('left');
			break;
			case 38: 
			updatePosition('up');
			break;	
			case 39: 
			updatePosition('right');
			break;
			case 32:
			addBlaster();
			break;
		};
	};
}


//    OBJECTS!

// 1)____ Set up players & set finisher to false.
var players = {
	'Player 1': {
		stripID: "Player_1",
		score: 000000000,
		position:"",
		lane: 0,
		scorebox: "player1box"
	}
	// 'Player 2': {
	// 	stripID: "Player_2",
	// 	score: 0,
	// 	position:"",
	// 	lane: 0,
	// 	scorebox: "player2box"
	// }
}

// players.findPlayer = function(stripID){
// 	if (stripID == 'Player_1') {
// 		return 'Player 1';
// 	} else {
// 		return 'Player 2';
// 	}
// }


var finisher = false;

// 2)____ Initiate start of game. 

start();


/// blaster

var addBlaster = function() {
//play auddio. 
var blastersound = new Audio('scripts/blasternoise.mp3');
	blastersound.play();	

	//playerposition here is the blaster position
	//initial blaster position
	var blasterPosition = players['Player 1'].position.parentNode.previousSibling.childNodes[players['Player 1'].lane]
	blasterPosition.classList.add('blaster');
}
var blasterMove = function(){

	// find blasters on page. 
	var blasters = document.querySelectorAll(".blaster");
	for(i =0 ; i <blasters.length ; i++) {

		//interate over blasters to find lane of each blaster, and shift it up a sqaure. 
		var blasterLane = Number(blasters[i].classList[0].slice(1));
		var newBlasterPos = blasters[i].parentNode.previousSibling.childNodes[blasterLane]
		newBlasterPos.classList.add("blaster");

		// remove blaster from top of table: 
		if (newBlasterPos.parentNode.classList.contains('finish')) {
			newBlasterPos.classList.remove('blaster')
		}

		//remove previous position. 
		blasters[i].classList.remove('blaster');

		// blow up car if blaster hits it. And update score by 100

		if (newBlasterPos.classList.contains('othercars')) {
			newBlasterPos.classList.remove('othercars', 'blaster');
			players['Player 1'].score+=100;
			scoreboard.textContent = players['Player 1'].score;

			var boomNoise = new Audio('scripts/boomnoise.mp3');
			boomNoise.play();
		}

	}
}

//____   Scoreboard

var scoreboard = document.getElementById('score');







//__________________


// traffic lights





