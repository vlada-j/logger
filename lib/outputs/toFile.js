const fs = require('fs');
const { getPath } = require("../settings");


function toFile(type, name, text) {
	const path = getPath(type)
	if (path) {
		if (!fs.existsSync(path)) { fs.mkdirSync(path); }

		fs.writeFileSync(path + name, text, 'utf8')
	}
}

module.exports = toFile;
