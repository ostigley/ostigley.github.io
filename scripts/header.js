//_________   Inserts header in to each page. 
var body = document.getElementsByTagName('body')
// console.log(body[0]);
var header = document.createElement("div");
header.innerHTML = "<div class=\"container\"><div class=\"row\"><div class=\"twelve columns ext-links\"><ul><li><a href=\"https://nz.linkedin.com/in/oliverstigley\"><img src=\"https://raw.githubusercontent.com/ostigley/ostigley.github.io/master/styles/assets/linked-in-logo-on-black-square-background_318-40265.png\"></a></li><li><a href=\"https://github.com/ostigley\"><img src=\"https://raw.githubusercontent.com/ostigley/ostigley.github.io/master/styles/assets/GitHub-Mark.png\"></a></li><li><a href=\"mailto:oliverstigley@gmail.com\"><img src=\"https://raw.githubusercontent.com/ostigley/ostigley.github.io/master/styles/assets/mail-4.png\"></a></li></ul></div></div>";
body[0].insertBefore(header, body[0].firstElementChild);
			