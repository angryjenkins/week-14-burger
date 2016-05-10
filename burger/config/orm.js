// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('./connection.js');

// ORM 
// =============================================================
var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	eatenBurgers: function(callback){
		var s = 'SELECT * FROM burgers  WHERE devoured = TRUE ORDER BY date DESC;'

		connection.query(s, function(err, result) {
	 
            callback(result);
        });
	},

	// Here our ORM is creating a simple method for performing a query of a single character in the table.
	// Again, we make use of the callback to grab a specific character from the database. 

	uneatenBurgers: function(callback){
		var s = ' 		s = "SELECT * FROM burgers WHERE devoured = FALSE ORDER BY date ASC';

		connection.query(s,[name], function(err, result) {
	 
            callback(result);
        });
	},

	eatBurger: function(burger) {	
        s = "UPDATE burgers " + 
				"SET devoured=TRUE " +
				'WHERE burger_name=?';
		// make query
		connection.query(s, [burger], function(err, result){
			if (err) throw err;
		})
    },

	// Here our ORM is creating a simple method for adding characters to the database
	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	buildBurger: function(burger){
		// add a burger with the appropos values
		var s = "INSERT INTO burgers " +
					"VALUES " +
						"(null, ?, FALSE, CURRENT_TIMESTAMP)";
		// make query
		connection.query(s, [burger], function(err, result){
			if (err) throw err;
		})
	}

module.exports = orm;