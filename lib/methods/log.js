const chalk = require('chalk')

const toConsole = require("../outputs/toConsole")
const toFile = require("../outputs/toFile")
const { fileNameNormalize, dateFormat } = require("../util")

module.exports = log;

function log() {
	const TIME = dateFormat();
	let text = Array.from(arguments);

	toConsole(0, chalk.yellow(`LOG: ${TIME}:`), text.join(" "))
	toFile(0, `${fileNameNormalize(TIME)}_LOG.txt`, text.join(" "))
}
