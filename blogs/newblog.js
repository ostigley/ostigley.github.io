var fs = require('fs-extra');
var exec = require('child_process').exec;

// data gathering for new blog entry
var questions =[
	"Please provide a new file name:",
	"Please provide a title for the blog:",
	"Date string for the blog:",
	"Tags: tag1, tag2, tag3..."
];

var newblog = { 
		title: '',
		fileName: '',
		blogdate: '',
		category: '',
		tags: [] 
		};

var answer = [];


//  Ask questions
function ask(i) {
	process.stdout.write(`\n\n ${questions[i]} \n\n`);
	process.stdout.write("  >  ");
	
}

process.stdin.on('data', function(data){
	answer.push(data.toString().trim());
	if (answer.length < questions.length) {
		ask(answer.length);
	} else
	
	process.exit();
});
ask(0);


process.on('exit', function() {
	var filename = answer[0].toString();
	exec(`cp blog-template.html ${filename}`, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log(filename, " created!");
		}

		var titleBuff = new Buffer(newblog.title);
		fs.writeSync(filename, titleBuff, 200, titleBuff.length, "UTF-8");
	});





	// process.stdout.write(`\n\n${answer[0]}\n\n`);

	// fs.copy('blog-template.html', filename, function (err) {
	//   if (err) return console.error(err);
	//   console.log("success!");
	// 	});

});








