const chalk = require('chalk')

const { isString, fill, fileNameNormalize, dateFormat} = require('../util')
const toConsole = require("../outputs/toConsole");
const toFile = require("../outputs/toFile");

module.exports = function(title, version, mode) {
	if ( !isString(title) || !title) return;

	version = !isString(version) ? '' + version : version;
	mode = !isString(mode) ? '' + mode : mode;

	const TIME = dateFormat();
	const fileName = fileNameNormalize(TIME) + "-"
		+ fileNameNormalize(title)
		+ (version ? "_(v" + fileNameNormalize(version) + ")" : "")
		+ (mode ? "-Run_as_" + fileNameNormalize(mode) : "");

	toConsole(0, "", consoleTitle(title, version, mode))
	toFile(0, `${fileName}.txt`, fileTitle(title, version, mode))
}


function fileTitle(_title, version, mode) {
	const title = _title.toUpperCase();
	const length = 80;

	let lines = [];
	let row = fill('#', length);
	let spaces = fill(' ', (length/2 - 3) - parseInt(title.length/2));
	lines.push(row);
	lines.push( '##' + spaces + title + spaces + ' ##' );
	lines.push(row);

	if (version) {
		lines.push( '   VERSION:  ' + version );
	}
	if (mode) {
		lines.push( '    RUN AS:  ' + mode );
	}
	if (version || mode) {
		lines.push(row);
	}

	return lines.join("\n")
}


function consoleTitle(_title, version, mode) {
	const title = _title.toUpperCase().split('').join(' ');
	const length = 80;

	let lines = [];
	let row = chalk.cyan( fill('#', length) );
	let spaces = fill(' ', (length/2 - 3) - parseInt(title.length/2));
	lines.push(row);
	lines.push( chalk.cyan('##' + spaces + title + spaces + ' ##') );
	lines.push(row);

	if (version) {
		lines.push( chalk.green('   VERSION:  ') + version );
	}
	if (mode) {
		lines.push( chalk.green('    RUN AS:  ') + mode );
	}

	if (version || mode) {
		lines.push(row);
		lines.push("");
		lines.push("");
	}

	return lines.join("\n")
}
