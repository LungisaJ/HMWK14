var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port = 8080;
app.listen(port);

console.log("Hey there");

var icecreams = [
	{name:"pineapple",price:10,awesomeness:3},
	{name:"blueberry",price:4,awesomeness:7},
	{name:"banana",price:3,awesomeness:4},
	{name:"pineapple",price:10,awesomeness:3},
	{name:"cocoa",price:4,awesomeness:7},
	{name:"peach",price:3,awesomeness:4},
	{name:"cherry",price:10,awesomeness:3},
	{name:"apple",price:4,awesomeness:7},
	{name:"sherbet",price:3,awesomeness:4},	
	{name:"strawberry",price:10,awesomeness:3},
	{name:"orange",price:4,awesomeness:7},
	{name:"mocha",price:3,awesomeness:4},
]

app.get('/',function(req,res){
	res.render('icecreams', {ics:icecreams});
})

app.get('/:name', function(req,res){
	for(var i=0; i<icecreams.length; i++){
		if(icecreams[i].name == req.params.name){
			return res.render('icecream',icecreams[i]);
		}
	}
})

console.log("what the func?")