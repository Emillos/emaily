// keys.js - figure what set of credentials to return

if (process.env.NODE_ENV === 'production'){
	// return prod keys
	module.exports = require('./prod');
}else{
	module.exports = require('./dev');
	// return dev keys
}