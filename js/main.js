var langCardObj =[
	{
		"title" : "Java",
		"blurb" : `
		Java is my main language and GitHub reflects
		 this with many Java projects. I greatly enjoy Android and 
		 GUI development however most work is still web based so Spring
		 fills in the gap nicely and with Spring Boot Java web apps have never
		 been so simple.
		 `,
		"url" : "java.html",
		"frameworks": ["Android", "JavaSE", "Spring", "Spark"]
	},
		{
		"title" : "Javascript",
		"blurb" : `
		The Language of the web and although I struggle with its 
		loose rules from time to time I am starting to understand
		its power as I play around with it more. A Lot of my Javascript 
		projects have beeen written in CodePen which I have found to be a great
		way to showcase smaller projects.
		`,
		"url" : "javascript.html",
		"frameworks" : ["Angular 1x", "Angular", "JQuery"]
	},
		{
		"title" : "C#",
		"blurb" : `
		After learning Java this was a natural progression as the language has a lot
		of the same syntax. My limited time with it has been great and I look forward
		to playing with more frameworks.
		`,
		"url" : "csharp.html",
		"frameworks" : ["ASP.Net", "ASP.NET Core"]
	},
		{
		"title" : "Python",
		"blurb" : `
		After learning Java I came across this nice neat and elegant language.
		My site is currently written in Python running on a Django framework.
		`,
		"url" : "python.html",
		"frameworks" : ["Django"]
	}
];

window.onload =$(".main-content").load("pages/landing.html", function(){
	buildLandingCards(langCardObj);	
});

$("body").click(function(e){
	console.log(e);
});

function buildLandingCards(cardArray){
	var i;

	for(i=0; i < cardArray.length; i++ ){

		var frameworkTags = "";
		for(var j = 0; j < cardArray[i].frameworks.length; j++){
			frameworkTags += "<a href=''>"+cardArray[i].frameworks[j]+"</a>";
		}

		var cardInsert = `
  <a href="#" class="`+cardArray[i].title+`-link">
  <div class="col s12 m6">
    <div class="card blue-grey darken-4 standard-card-content">
      <div class="card-content ">
        <span class="card-title highligher">`+cardArray[i].title+`</span>
        <p>`+cardArray[i].blurb+`</p>
      </div>
      <div class="card-action">
      	`+frameworkTags+`
      </div>
    </div>
  </div></a>
		`
		$(".landing-content").append(cardInsert);
	}

};




