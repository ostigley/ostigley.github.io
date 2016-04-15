var blogList = {
	"blogs":[ 

	{
		title: "Fireside Chat Reflections",
		fileName: "c1-reflection-blog.html",
		blogdate: "23 February 2016",
		category: "human",
		tags: ["reflection", "EDA"]
	}, 

	{
		title: "Time & Habits",
		fileName: "c1-time-and-habits-blog.html",
		blogdate: "25 February 2016",
		category: "human",
		tags: ["habits", "time-management"]
	}, 

	{
		title: "Emotional Intelligence",
		fileName: "c2-emotional-intelligence.html",
		blogdate: "2 March 2016",
		category: "human",
		tags: ["emotional Intelligence", "mindfullness", "meditation"]
	}, 

	{
		title: "Thoughts on Meditation",
		fileName: "c3-meditation-process.html",
		blogdate: "11 March 2016",
		category: "human",
		tags: ["meditation"]
	}, 

	{
		title: "Mindfulness Conversation",
		fileName: "c4-daily-mindfulness.html",
		blogdate: "15 March 2015",
		category: "human",
		tags: ["mindfullness", "listening"]
	}, 

	{
		title: "Self Awareness",
		fileName: "c5-self-confidence.html",
		blogdate: "27 March 2016",
		category: "human",
		tags: ["mindfullness", "self awareness", "emotional intelligence"]
	}, 

	{
		title: "Self Control",
		fileName: "c6-control.html",
		blogdate: "1 April 2016",
		category: "human",
		tags: ["self control", "mindfullness"]
	}, 

	{
		title: "Motivation",
		fileName: "c7-motivation.html",
		blogdate: "7 April 2016",
		category: "human",
		tags: ["happiness", "Motivation", "values"]
	}, 

	{
		title: "Udacity Reflection",
		fileName: "t2-html-css-dom-p1.html",
		blogdate: "1 March 2016",
		category: "dev",
		tags: ["CSS", "DOM", "document object model", "html", "udacity"]
	}, 

	{
		title: "Udacity Reflection Pt 2",
		fileName: "t2-html-css-dom-p2.html",
		blogdate: "2 March 2016",
		category: "dev",
		tags: ["CSS", "DOM", "document object model", "html", "semantic elements", "grid"]
	}, 

	{
		title: "Design to Web",
		fileName: "t3-design-to-web-blog.html",
		blogdate: "9 March 2016",
		category: "dev",
		tags: ["process", "wire-frames", "design", "responsiveness", "mobile first"]
	}, 

	{
		title: "Javascript",
		fileName: "t4-javascript-basics.html",
		blogdate: "23 February 2016",
		category: "dev",
		tags: ["javascript", "html", "CSS", "control flow", "array", "object", "function"]
	}, 

	{
		title: "Problem Solving",
		fileName: "t5-problem-solving.html",
		blogdate: "25 March 2016",
		category: "dev",
		tags: ["debugging", "problem Solving", "javascript", "function"]
	}, 

	{
		title: "Javascript Language",
		fileName: "t6-js-language.html",
		blogdate: "1 April 2016",
		category: "dev",
		tags: ["syntax", "javascript"]
	}, 

	{
		title: "Javascript Scope",
		fileName: "t7-testing.html",
		blogdate: "12 April 2016",
		category: "dev",
		tags: ["scope", "javascript", ""]
	}, 
	]
};

var linkHTML = "<li><a href=\"blogs/%fileName%\">%title%</a>"; 
var dateHTML = "<p>Date %blogdate%</p></li>";


for (var blog in blogList.blogs) {
	var link = linkHTML.replace("%fileName%", blogList.blogs[blog].fileName);
	link = link.replace("%title%", blogList.blogs[blog].title);
	var date = dateHTML.replace("%blogdate%", blogList.blogs[blog].blogdate);

	var DOM = `#${blogList.blogs[blog].category}`

	$(DOM).append(link);
	$(DOM).append(date);



}


