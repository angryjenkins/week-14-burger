// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
var path 	= require('path');
var orm 	= require('../burger/config/orm.js');

//notify the server administrator that the html route is connected
console.log("html-routes connected");

module.exports = function(app){
//use orm to get all burgers from mysql
	app.get('/', function(req,res) {
	    orm.getAllBurgers(function(burger){
	        	res.render('index', {burger});
	    	})
    });

	app.use('/image',function(req, res){
		res.sendFile(path.join(__dirname + '/assets/images/burger.jpg'));
	});
}