const settings = require("../settings")

const TYPES = [ "log", "error", "info" ]

function toConsole(type, name, text) {
	if (settings.console) {
		const method = TYPES[type] || TYPES[0];
		console[method] && console[method].apply(console, name ? [name, text] : [text]);
	}
}

module.exports = toConsole;
