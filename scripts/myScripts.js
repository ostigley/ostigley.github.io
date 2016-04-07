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
paras.onmouseover = function() {
	this.style.backgroundColor = "white";
};


// var headers = ["aboutme", "cv", "projects", "blog"]
// for (i=0; i<headers.length; i++) {
// 	$(`#${headers[i]}header`).click(function(){
// 		console.log(`#${headers[i]}content`)
// 		$(`#${headers[i]}content`).toggleClass('hide');
// 	});
// }

///    Toggle header displays on front page. 
$('#aboutmeheader').click(function(){
	$('#aboutmecontent').toggleClass('hide');
});

$('#cvheader').click(function(){
	$('#cvcontent').toggleClass('hide');
})

$('#projectsheader').click(function(){
	$('#projectscontent').toggleClass('hide');
})

$('#blogheader').click(function(){
	$('#blogcontent').toggleClass('hide');
})