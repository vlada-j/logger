const settings = require("../settings")
const error = require("./error")


module.exports = errorTracker


function errorTracker() {
	process.on("uncaughtException", onException)
	process.on("unhandledRejection", onRejection)
}


function printError(errorMessage) {
	if (settings.tracker) {
		error(errorMessage)
	}
}


function onException(err) {
	const errorMessage = err instanceof Error && err.stack ? err.stack.toString() : ("UNCAUGHT EXCEPTION: " + err)
	printError(errorMessage)
	process.exit()
}


function onRejection(err) {
	const errorMessage = err instanceof Error && err.stack ? err.stack.toString() : ("UNHANDLED REJECTION: " + err)
	printError(errorMessage)
}
