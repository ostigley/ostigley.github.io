// var audio = new Audio('scripts/revs.mp3');
// audio.play();


//   Initiate GAME PLAY!   

//____________________________________________________________________________________



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
	var startingBlocks = document.querySelectorAll('.startingBlock');

	for (i=0; i<startingBlocks.length; i++) {
		startingBlocks[i].classList.add('active')
	} 
	
	// call set=Pos to define position variables. 

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
			intervalmoveCarsDown = window.setInterval(moveCarsDown, 200);
			intervalCarCrash = window.setInterval(carCrash, 10);
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
	// re-initialise position variables in pplayer object. 

	for(var key in players) {
		players[key].position = document.getElementsByClassName(players[key].stripID + ' active')[0];
		//players[key].lane = Number(players[key].position.classList[0].slice(1));  NO IDEA WHY THIS DOESN't WORK.
	}
	players['Player 1'].lane = Number(players['Player 1'].position.classList[0].slice(1));
	players['Player 2'].lane = Number(players['Player 2'].position.classList[0].slice(1));

	// [0] index is returning the table entry that is currently active.  there sohuld only be two entries that are avtive on the whole page. 
}

var whichPlayer = function (player){
	if (player === 'Player 1') {
		return players.player1;
	} else {
		return players.player2;
	}
}

var finished = function(player, carCrashBoolean) {
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



		//____   Scoreboard
		// for (var key in players) {
			//  ITERATION started failing for some reason, so I've made it long hand.  smelly but it works. 
		var scoreboard = document.getElementById(players['Player 1'].scorebox).childNodes[3];
		scoreboard.textContent = players['Player 1'].score;
		var scoreboard = document.getElementById(players['Player 1'].scorebox).childNodes[3];
		scoreboard.textContent = players['Player 1'].score;
		// }
	}
	
	if (carCrashBoolean) {
		// stops game, updates score and alerts players if carcrash has happened
		console.log('finisher action')
		var otherPlayer;
		if (player == 'Player 1') {
			otherPlayer = 'Player 2';
		}	else {
			otherPlayer = 'Player 1';
		}

		players[otherPlayer].score++;
		finishActions();

		var replay = confirm(player+ ' was in a car crash!!  '+ otherPlayer+'wins!!!\n \nDo you want a re-match?');
		if (replay) {
			start();
		}
	} else if (players[player].position.parentNode.classList.contains("finish")) {
		// stops game, updates score and alerts player crosses finish line!
		players[player].score++;
		finishActions();

		//Ask to replay. 
		var replay = confirm(player+ ' wins!!!\n \nDo you want a re-match?');
		if (replay) {
			start();
		}
	}
};

var updatePosition = function (player, direction,otherCarLane) {
	// move player forward on the board
	if (direction != "down") {
		var playerPosition = players[player].position;
	}

	var removeOldPosition = function (position, class2remove){
		position.classList.remove(class2remove);
	};

	switch (direction) {

		case 'left':
			if (!laneBoundries.check(player, 'left')) {
				playerPosition.previousSibling.classList.add('active'); 
				removeOldPosition(playerPosition, "active");
			}
			break;
		case 'right':
			if (!laneBoundries.check(player, 'right')) {
				playerPosition.nextSibling.classList.add('active');
				removeOldPosition(playerPosition, "active");
			}
			break;
		case 'up':
			playerPosition.parentNode.previousSibling.childNodes[players[player].lane].classList.add("active")
			removeOldPosition(playerPosition, "active");
			break;
		case 'down':
			// 'player' parameter here is actually the position of the red car.  move down if not at start
			if(player.parentNode.classList[0] != 'start') {
				player.parentNode.nextSibling.childNodes[otherCarLane].classList.add("othercars");
				removeOldPosition(player, "othercars");
			}
			break;
		};
	


	// re-initialise position variables in pplayer object. 
	setPos();

	//check if finished, if update position function has been called to move a player (not a red car):
	if(player == 'Player 1' || player == 'Player 2') {
		finished(player);
	}
}

var keypress = function (key) {
	if (!finisher) {
		var k = key.which;
		switch (k) {
			case 90: 
			updatePosition('Player 1', 'left');
			break;
			case 88: 
			updatePosition('Player 1', 'up');
			break;	
			case 67: 
			updatePosition('Player 1', 'right');
			break;

			case 188: 
			updatePosition('Player 2', 'left');
			break;
			case 190: 
			updatePosition('Player 2', 'up');
			break;	
			case 191: 
			updatePosition('Player 2', 'right');
			break;
		};
	};
}


//    OBJECTS!

// 1)____ Set up players & set finisher to false.
var players = {
	'Player 1': {
		stripID: "Player_1",
		score: 0,
		position:"",
		lane: 0,
		scorebox: "player1box"
	},
	'Player 2': {
		stripID: "Player_2",
		score: 0,
		position:"",
		lane: 0,
		scorebox: "player2box"
	}
}

players.findPlayer = function(stripID){
	if (stripID == 'Player_1') {
		return 'Player 1';
	} else {
		return 'Player 2';
	}
}

// lane boundries




var finisher = false;

// 2)____ Initiate start of game. 

start();


///   coundown counter. 







//__________________


// traffic lights





