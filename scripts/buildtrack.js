//   Build track HTML

var trackWidth = Number(prompt('How many lanes?  3-10'));

for (i=0; i<20; i++) {
	// set racetrack variable by finding table body
	var racetrack = document.querySelector('tbody')
	// clear existing html ifplayers want different size game

	
	// create and append rows
	var tableRows = document.createElement("tr")
	racetrack.appendChild(tableRows);

	// iterate to create and append classes defining
	for (j=0; j<(trackWidth*2); j++) { 
		var tableCols = document.createElement('td')
		tableCols.classList.add('L'+j);

		if (j < trackWidth) {
			tableCols.classList.add('Player_1')
		} else {
			tableCols.classList.add('Player_2')
		}

		tableRows.appendChild(tableCols);
	}
}

//Add finish and start line and starting positions
document.querySelector('tr').classList.add('finish');
document.querySelectorAll('tr')[19].classList.add('start')
//add starting blokc half way along number of lanes for each player. 
document.querySelector('.start').childNodes[Math.floor(trackWidth/2)].classList.add("startingBlock");
document.querySelector('.start').childNodes[Math.floor(trackWidth/2)+trackWidth].classList.add("startingBlock");


//  Set left and right lane broundries: 

var laneBoundries = {
	left1: 0,
	left2: trackWidth,
	right1: trackWidth-1,
	right2: trackWidth*2-1
}

laneBoundries.check = function(player, boundry) {
	return ( (players[player].lane == laneBoundries[boundry+"1"]) || (players[player].lane == laneBoundries[boundry+"2"]) );
}

