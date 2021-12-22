const path = require('path')
const logger = require('../main')

const ROOT = path.resolve('./')

const DESTINATION_VALUE_LOGS = "../logs"
const DESTINATION_RESULT_LOGS = path.join(ROOT, "../logs/")

const DESTINATION_VALUE_ERRORS = "../errors"
const DESTINATION_RESULT_ERRORS = path.join(ROOT, "../errors/")

const DESTINATION_VALUE = "../all"
const DESTINATION_RESULT = path.join(ROOT, "../all/")

describe('logger.settings.getPath', () => {
	test('Is a function', () => {
		expect(typeof logger.settings.getPath).toBe("function");
	});

	test('Get default path', () => {
		logger.settings({ file: DESTINATION_VALUE });
		expect(logger.settings.getPath()).toBe(DESTINATION_RESULT);

		logger.settings({
			file: {
				logs: DESTINATION_VALUE_LOGS,
				errors: DESTINATION_VALUE_ERRORS,
			}
		})
		expect(logger.settings.getPath()).toBe(DESTINATION_RESULT_LOGS);
	});

	test('Get logs path', () => {
		expect(logger.settings.getPath(0)).toBe(DESTINATION_RESULT_LOGS);
	});

	test('Get errors path', () => {
		expect(logger.settings.getPath(1)).toBe(DESTINATION_RESULT_ERRORS);
	});

	test('Get no path', () => {
		logger.settings({ file: false });
		expect(logger.settings.getPath()).toBe(false);
	});
})
