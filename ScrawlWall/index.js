(function () {

"use strict";

var LISTEN_PORT = 80;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var messages = [];

//-------------------------------------------------------------------------------------------------------------------//
// App configuration
//-------------------------------------------------------------------------------------------------------------------//
app.set('view engine', 'pug');
app.use(express.static('static'));


//-------------------------------------------------------------------------------------------------------------------//
// Route handlers
//-------------------------------------------------------------------------------------------------------------------//
function renderIndex(res) {
	res.render('index', { messages: messages });
}

app.get('/', function (req, res) {
	renderIndex(res);
});

app.post('/', urlencodedParser, function (req, res) {
	console.log(req.body);
	messages.push({
		date: new Date(),
		text: req.body.message
	});

	renderIndex(res);
});


//-------------------------------------------------------------------------------------------------------------------//
// Server start
//-------------------------------------------------------------------------------------------------------------------//
var server = app.listen(LISTEN_PORT, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Example app listening at http://%s:%s", host, port)
})

})();