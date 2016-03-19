var articleContent = document.getElementsByTagName("article")

var changeBcol = function() {
	var r=Math.floor((Math.random()*255));
	var b=Math.floor((Math.random()*255));
	var g=Math.floor((Math.random()*255));

	var newCol = "rgb("+String(r)+","+String(g)+","+String(b)+")"
	console.log(newCol);
	// if (r>255) {
	// 	r = 1;
	// 	g = 1;
	// 	b = 1;
	// }
	articleContent[0].style.backgroundColor = newCol;
};

window.setInterval(changeBcol,1000);

