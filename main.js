const methods = {
	version: require("./package.json").version,
	settings: require("./lib/settings"),
	log: function() { require("./lib/methods/log").apply(null, arguments); return this },
	error: function() { require("./lib/methods/error").apply(null, arguments); return this },
	clear: function() { require("./lib/methods/clear").apply(null, arguments); return this },
	title: function(title, version, mode) { require("./lib/methods/title")(title, version, mode); return this },
};

require("./lib/methods/errorTracker")()

module.exports = Object.assign(methods.log, methods);
