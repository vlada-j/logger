const path = require('path')
const { isBoolean, isString, isObject } = require('./util')

const DEFAULT = {
	console: true,
	file: false,
	tracker: true
}

const TYPE = [ 'logs', 'errors' ]

const ROOT = path.resolve('./')

settings()

settings.getPath = getPath;

module.exports = settings

function settings(config) {
	config = config || {};

	if ( isBoolean(config.tracker) ) {
		settings.tracker = !!config.tracker;
	} else if ( !isBoolean(settings.tracker) ) {
		settings.tracker = DEFAULT.tracker;
	}

	if ( isBoolean(config.console) ) {
		settings.console = !!config.console;
	} else if ( !isBoolean(settings.console) ) {
		settings.console = DEFAULT.console;
	}

	if ( isObject(config.file) ) {
		if ( !isObject( settings.file ) ) { settings.file = {} }

		TYPE.forEach(type => {
			const value = config.file[type];

			if ( isString( value ) || isBoolean( value ) ) {
				settings.file[type] = isString(value) ? path.join(ROOT, '/', value, '/') : value;
			}
		})
	} else if ( isObject(config.file) || isString(config.file) || isBoolean(config.file) ) {
		settings.file = isString(config.file) ? path.join(ROOT, '/', config.file, '/') : config.file;
	} else if ( !isString(settings.file) && !isBoolean(settings.file) ) {
		settings.file = DEFAULT.file;
	}

	return settings
}


function getPath(type) {
	type = TYPE[type] || 'logs'

	if ( isObject(settings.file) && isString(settings.file[ type ]) ) {
		return settings.file[ type ]
	} else {
		return isString(settings.file) ? settings.file : false
	}
}
