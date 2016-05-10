
var express 	= require('express');
var burger 		= require('../models/burger.js');

// Routes
module.exports = function(app) {
	// API ROUTES
	// ===========
	// uneaten burgers
	app.get("/api/uneaten", function(req, res) {
		burger.uneatenDis(function(data) {
			// display as json
			res.json(data);
		});
	})

	// eaten burger
	app.get("/api/eaten", function(req, res) {
		burger.eatenDis(function(data) {
			//display as json
			res.json(data);
		});
	})

	// add a burger
	app.post("/api/build", function(req, res) {
		// grab the burger obj from the post
		var builtBurger = req.body;
		// grab the burger's name
		burger.addNew(builtBurger.name);
	})

	// eat a burger
	app.put("/api/eat", function(req, res) {
		// grab the burger obj from the put
		var ateBurger = req.body;
		// eat the burger
		burger.eatOne(ateBurger.name);
	})

	// HTML ROUTES
	// ===========

	// when viewing root of local host, show index.html
	app.get('/', function(req, res) {
		res.render("../views/index.html");
	})
}

