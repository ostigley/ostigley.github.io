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

// /    Toggle header displays on front page. 
$('.myheader').click(function(){
	$(this).find('.mycontent').toggleClass('hide');
});




var work = {
	"jobs":[ 
		{
		"Position": "Student",
		"Employer": "Enspiral Development Academy",
		"location": ["Wellington, New Zealand","Current residence, born & bred"],
		"Dates": "February 2016 - June 2016",
		"Description": "I retrained as a web developer through this bootcamp style accademy, specialising in HTML, Javascript, NodeJS and Ruby on Rails."
		},
		{
		"Position": "Volunteer Teacher",
		"Employer": "GVI Luang Prabang",
		"location": ["Luang Prabang, Laos","Volunteer Teacher, 2016"],
		"Dates": "February 2016 ",
		"Description": "I had a life changing experience volunteering for a month as an English teacher in Luang Prabang Laos.  I was teaching children and Novice Monks English in local schools, and Buddhist temples."
		},
		{
		"Position": "Business Development Manager",
		"Employer": "TalkingTech UK",
		"location": ["London, United Kingdom","I worked and lived in London from 2008-2016"],
		"Dates": "2013 - 2016",
		"Description": "As a Business Development Manager, I sought new partnerships and opportunities  with companies looking to fundamentally change the way the interact with their consumers.  TALKINGTECH specialises in omni-channel solutions encompassing digital communications, customer experience and payments."
		},
		{
		"Position": "Business Development Manager",
		"Employer": "New Zealand Trade & Enterprise",
		"location": ["London, United Kingdom","I worked and lived in London from 2008-2016"],
		"Dates": "2010 - 2013",
		"Description": "Assisting New Zealand companies internationalise on an individual basis, but also working within regional and global projects.  My responsibilities include providing market intelligence and consultancy services to New Zealand companies, implementing special projects that deliver strategies and solutions for the sustainable economic growth of the New Zealand economy.  "
		},
		{
		"Position": "Technology Market Researcher",
		"Employer": "Qi3 Ltd",
		"location": ["London, United Kingdom","I worked and lived in London from 2008-2016"],
		"Dates": "2008 - 2010",
		"Description": "Click to edit position descriptionAs Technology Market Researcher, I worked as part of a wider team on a consultant basis for technology companies and universities. Actively involved with researching applications for new technologies, advising commercialisation strategy and finding customers, business partners and funding opportunities."
		},
		{
		"Position": "Internal Sales",
		"Employer": "Laser 2000 Ltd",
		"location": ["Cambridge, United Kingdom","Internal Sales Assistant, 2006-2008"],
		"Dates": "2006 - 2008",
		"Description": "Inernal Sales assistant"
		},
		{
		"Position": "Intern Laser Engineer",
		"Employer": "Coheret Systems",
		"location": ["Glasgow, United Kingdom","MSc student and R&D internship, 6 months"],
		"Dates": "2006",
		"Description": "I was part of a research and development team, working on new product development with laboratory and manufacturing lasers"
		}
	]
}
	

var education = { 
	"schools": [ 
		{
		"name": "Enspiral Development Academy",
		"subjects": "Web Development",
		"years": "2016",
		"location": ["Wellinton, New Zealand","Current residence, born & bred"],
		"major": "HTML, CSS, Javascript, NodeJS, Ruby on Rails"
		}, 
		{
		"name": "University of St Andrews",
		"subjects": "MSc", 
		"years": "2005-2006",
		"location": ["St Andrews, Scotland", "MSc Student, Photonics & Optoelectronics"],
		"major": "Photonics and Optoelectronics"
		}, 
		{
		"name": "University of Otago",
		"subjects": "BA",
		"years": "2001-2005",
		"location": ["Dunedin, New Zealand", "Undergraduate student, 2001-2005"],
		"major": "Philosophy, Politics & Economics"
		},
		{
		"name": "University of Otago",
		"subjects": "BSc",
		"years": "2001-2005",
		"location": ["Dunedin, New Zealand", "Undergraduate student, 2001-2005"],
		"major": "Physics"
		}
	]
}

var projects = {
	"project": [
		{
			"dates": "February 2016 - Ongoing",
			"title": "ostigley",
			"description": "Github bloging site to act as my homepage for my Enspiral Development Academy blogs and projects",
			"skills": "HTML, CSS, Responsive Design",
			"url": "ostigley.github.io"
			
		},
		{
			"dates": "March 2016",
			"title": "Motormad",
			"description": "A simple Javascript game featuring two cars racing the wrong way down a highway.",
			"skills": "Javascript",
			"url": "ostigley.github.io/racecar.html",
			"image": "images/racer.jpg"
		}
	]
}