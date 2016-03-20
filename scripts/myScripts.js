//  Change background colour

var col=225;	
var c=1;
var changeBcol = function() {
	col +=c; 
	var newCol = "rgb("+String(col)+","+String(col)+","+String(col)+")"
	if (col==255 || col== 224) {
		c*=-1;
	};
	document.getElementsByTagName('body')[0].style.backgroundColor = newCol;
};
window.setInterval(changeBcol,600);


var paras = document.getElementsByTagName('p');
console.log(paras);
paras.onmouseover = function() {
	console.log('mouseover')
	this.style.backgroundColor = "white";
};





