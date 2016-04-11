
var addCars = function (){ 
	nextLaneNumber = Math.floor(Math.random()*trackWidth).toString();
	// convert to string and add L for class name. 
	nextLane = ".L"+nextLaneNumber;
	// find lane node and add class othercars class.
	document.querySelector(nextLane).classList.add('othercars');
}

//get all othercar elements to iterate over: 
var moveCarsDown = function(){
	var othercars = document.querySelectorAll(".othercars");
	for(i =0 ; i <othercars.length ; i++) {
		var carLane = Number(othercars[i].classList[0].slice(1))
		updatePosition("down", carLane, othercars[i]);
	}
}

var carCrash = function(){
	var activePositions = document.querySelectorAll('.active');
	var boomNoise = new Audio('scripts/boomnoise.mp3');
	for(i=0; i<activePositions.length; i++) {
		if ( activePositions[i].classList.contains('othercars') ) {

			boomNoise.play();
			
			return finished(true);
		}
		
	}

}



