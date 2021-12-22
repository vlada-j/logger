module.exports = function clear() {
	console.clear();
	// process.stdout.write("\033[2J");
	process.stdout.write('\x1Bc');
}
