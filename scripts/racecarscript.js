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

	//  Put players back to start position. 
	for(var key in players) {
		var array = document.getElementsByClassName(players[key].stripID)
		array[array.length-1].classList.add("active"); 
	}

	// call set=Pos to define position variables. 
	setPos();

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
			return document.addEventListener("keyup", keypress, false);
		} else {
			return window.setTimeout(turngreen, 1000,lights[counter]);
		}
	}
	window.setTimeout(turngreen, 1000,lights[0]);

	finisher = false;
	//   initiate event listener for movements
	
	}


//  Set position: function to update position of players in Player object. 

var setPos = function (replay) {
	// re-initialise position variables in pplayer object. 

	for(var key in players) {
		players[key].position = document.getElementsByClassName(players[key].stripID + ' active')[0]
	}
	// [0] index is returning the table entry that is currently active.  there sohuld only be two entries that are avtive on the whole page. 
}

var whichPlayer = function (player){
	if (player === 'Player 1') {
		return players.player1;
	} else {
		return players.player2;
	}
}

var finished = function(player) {
//Check if player has crossed the finishe line.  Ask for new game.  Update score. 
	
	if (players[player].position.classList[1] == "finish") {
		finisher = true;
		document.removeEventListener("keyup", keypress, false)

		// Turn lights red all at the same time
		L = document.querySelectorAll(".light1, .light2, .light3");
		for(i=0; i<L.length; i++ ) {
			L[i].classList.remove('greenlight');
			L[i].classList.add('redlight')
		}

		
		// update score
		players[player].score++;
		//____   Scoreboard
		for (var key in players) {
		var scoreboard = document.getElementById(players[key].scorebox).childNodes[3]
		scoreboard.textContent = players[key].score;
		}

		//Ask to replay. 
		var replay = confirm(player+ ' wins!!!\n \nDo you want a re-match?');
		if (replay) {
			start();
		}
	}
};

var updatePosition = function (player) {
	// move player forward on the board
	players[player].position.parentNode.previousSibling.previousSibling.childNodes[players[player].lane].classList.add("active")
	//players[player].position.nextElementSibling.classList.add("active");
	players[player].position.classList.remove("active");
	
	// re-initialise position variables in pplayer object. 
	setPos();

	//check if finished:
	finished(player);
}

var keypress = function (key) {
	if (!finisher) {
		var k = key.which;
		switch (k) {
			case 90: 
			updatePosition('Player 1');
			break;
			case 191: 
			updatePosition('Player 2');
			break;	
		};
	};
}



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
		lane: 1,
		scorebox: "player2box"
	}
}
var finisher = false;

// 2)____ Initiate start of game. 

start();


///   coundown counter. 







//__________________


// traffic lights





