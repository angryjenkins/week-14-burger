var orm = require('../config/orm');

console.log('burger maker connected!')
// make burger functions
var burger = {
	
	uneaten: function (callback) {
		orm.uneatenBurgers(function(data){
			callback(data);
		})
	},

	
	eaten: function(callback) {
		orm.eatenBurgers(function(data){
			callback(data);
		})
	},

	// code makes a burger
	add: function(burger) {
		orm.buildBurger(burger);
	},

	// code sets burger to eaten
	eat: function(burger) {
		orm.eatBurger(burger);
	}
}

// export burger functions
module.exports = burger;