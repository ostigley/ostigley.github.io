var blogList = {
	"blogs":[ 
		{ 
		title: 'Leadership & Compassion',
		fileName: 'c9-leadership.html',
		blogdate: '22 April 2016',
		category: 'human',
		tags: [ 'leadership', 'compassion', 'meditation' ] 
		},

		{ 
		title: 'Empathy',
		fileName: 'c8-connecting.html',
		blogdate: '17 April 2016',
		category: 'human',
		tags: [ 'empathy', 'kindness', 'trust', 'self-awareness' ] 
		},
		{ 
		title: 'Objects, Prototypes & Inheritance',
		fileName: 'object-prototypes-inheritance.html',
		blogdate: '16 April 2016',
		category: 'dev',
		tags: [ 'objects', 'Prototypes', 'inheritance', 'class', 'javascript' ] 
		},

		{ 
		title: 'Lightbulb: Equality',
		fileName: 'equality.html',
		blogdate: '16 April 2016',
		category: 'dev',
		tags: [ 'testing', 'javascript', 'equality' ] 
		},

		{ 
		title: 'Lightbulb: eval()',
		fileName: 'eval.html',
		blogdate: '16 April 2016',
		category: 'dev',
		tags: [ 'function', 'javascript', 'freecodecamp' ] 
		},

		{ 
		title: 'Scope & Closure',
		fileName: 't7-testing.html',
		blogdate: '12 April 2016',
		category: 'dev',
		tags: [ 'scope', 'closure', 'javascript' ] 
		},

		{ 
		title: 'Javascript Language',
		fileName: 't6-js-language.html',
		blogdate: '1 April 2016',
		category: 'dev',
		tags: [ 'syntax', 'javascript' ] 
		},

		{ 
		title: 'Problem Solving',
		fileName: 't5-problem-solving.html',
		blogdate: '25 March 2016',
		category: 'dev',
		tags: [ 'debugging', 'problem Solving', 'javascript', 'function' ] 
		},

		{ 
		title: 'Javascript',
		fileName: 't4-javascript-basics.html',
		blogdate: '23 February 2016',
		category: 'dev',
		tags: [ 'javascript','html','CSS','control flow','array','object','function' ] 
		},

		{ 
		title: 'Design to Web',
		fileName: 't3-design-to-web-blog.html',
		blogdate: '9 March 2016',
		category: 'dev',
		tags: [ 'process','wire-frames','design','responsiveness','mobile first' ] 
		},

		{ title: 'Udacity Reflection Pt 2',
		fileName: 't2-html-css-dom-p2.html',
		blogdate: '2 March 2016',
		category: 'dev',
		tags: [ 'CSS','DOM','document object model','html','semantic elements','grid' ] 
		},

		{ title: 'Udacity Reflection',
		fileName: 't2-html-css-dom-p1.html',
		blogdate: '1 March 2016',
		category: 'dev',
		tags: [ 'CSS', 'DOM', 'document object model', 'html', 'udacity' ] 
		},

		{ title: 'Motivation',
		fileName: 'c7-motivation.html',
		blogdate: '7 April 2016',
		category: 'human',
		tags: [ 'happiness', 'Motivation', 'values' ] 
		},

		{ title: 'Self Control',
		fileName: 'c6-control.html',
		blogdate: '1 April 2016',
		category: 'human',
		tags: [ 'self control', 'mindfullness' ] 
		},

		{ title: 'Self Awareness',
		fileName: 'c5-self-confidence.html',
		blogdate: '27 March 2016',
		category: 'human',
		tags: [ 'mindfullness', 'self awareness', 'emotional intelligence' ] 
		},

		{ title: 'Mindfulness Conversation',
		fileName: 'c4-daily-mindfulness.html',
		blogdate: '15 March 2015',
		category: 'human',
		tags: [ 'mindfullness', 'listening' ] 
		},

		{ title: 'Thoughts on Meditation',
		fileName: 'c3-meditation-process.html',
		blogdate: '11 March 2016',
		category: 'human',
		tags: [ 'meditation' ] 
		},

		{ title: 'Emotional Intelligence',
		fileName: 'c2-emotional-intelligence.html',
		blogdate: '2 March 2016',
		category: 'human',
		tags: [ 'emotional Intelligence', 'mindfullness', 'meditation' ] 
		},

		{ title: 'Time & Habits',
		fileName: 'c1-time-and-habits-blog.html',
		blogdate: '25 February 2016',
		category: 'human',
		tags: [ 'habits', 'time-management' ] 
		},

		{ title: 'Fireside Chat Reflections',
		fileName: 'c1-reflection-blog.html',
		blogdate: '23 February 2016',
		category: 'human',
		tags: [ 'reflection', 'EDA' ] 
		} 
		]	
};

var linkHTML = "<a href=\"blogs/%fileName%\">%title%:</a>  "; 
var dateHTML = "<p>Date %blogdate%</p>";
var showBlogs = function(type) {

	//toggle underline emphasis class on bog cat headings. 
	if (type ==="human") {
		$(".dev").removeClass('show');
	} else if (type === "dev") {
		$(".human").removeClass('show');
	}
	$("."+type).addClass('show');


	//clear existing blog list
	$(".bloglist").html("");

	// append blogs if they are in the right category
	for (var blog in blogList.blogs) {
		if(blogList.blogs[blog].category === type) {
			var link = linkHTML.replace("%fileName%", blogList.blogs[blog].fileName);
			link = link.replace("%title%", blogList.blogs[blog].title);
			link+= blogList.blogs[blog].tags.join(" - ");
			var date = dateHTML.replace("%blogdate%", blogList.blogs[blog].blogdate);

			$(".bloglist").append(link);
			$(".bloglist").append(date);
		}
	}	
};

showBlogs('dev');


$('.blogcat h6').click(function(){
	if (this.innerHTML ==="Category:") {
		return;	
	}
	showBlogs(this.classList[0]);
});


