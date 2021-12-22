const chalk = require('chalk')

const toConsole = require("../outputs/toConsole")
const toFile = require("../outputs/toFile")
const { fileNameNormalize, dateFormat } = require("../util")

module.exports = error;

function error() {
	const TIME = dateFormat();
	let text = Array.from(arguments);

	toConsole(1, chalk.red(`ERROR: ${TIME}:`), text.join(" "))
	toFile(1, `${fileNameNormalize(TIME)}_ERROR.txt`, text.join(" "))
}
