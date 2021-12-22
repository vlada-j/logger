const path = require('path')
const logger = require('../main')

const ROOT = path.resolve('./')
const DESTINATION_VALUE = "../logs"
const DESTINATION_RESULT = path.join(ROOT, "../logs/")

describe('logger.settings', () => {
	test('Is function', () => {
		expect(typeof logger.settings).toBe("function");
	});

	test('Have return itself', () => {
		const value = logger.settings();
		expect(value).toBe(logger.settings);
	});

	test('Default "console" value is true', () => {
		const value = logger.settings();
		expect(value).toHaveProperty("console");
		expect(value.console).toBe(true);
	});

	test('Default "tracker" value is true', () => {
		const value = logger.settings();
		expect(value).toHaveProperty("tracker");
		expect(value.tracker).toBe(true);
	});

	test('Default "file" value is false', () => {
		const value = logger.settings();
		expect(value).toHaveProperty("file");
		expect(value.file).toBe(false);
	});

	test('Set only "file" path', () => {
		const value = logger.settings({ file: DESTINATION_VALUE });
		expect(value.console).toBe(true);
		expect(typeof value.file).toBe("string");
		expect(value.file).toBe(DESTINATION_RESULT);
	});

	test('Disable only "console"', () => {
		const value = logger.settings({ console: false });
		expect(value.console).toBe(false);
		expect(typeof value.file).toBe("string");
	});

	test('Disable only "file"', () => {
		const value = logger.settings({ file: false });
		expect(value.console).toBe(false);
		expect(value.file).toBe(false);
	});

	test('Set only "console"', () => {
		const value = logger.settings({ console: true});
		expect(value.console).toBe(true);
		expect(value.file).toBe(false);
	});

	test('Set all', () => {
		const value = logger.settings({ console: true, file: DESTINATION_VALUE, tracker: true });
		expect(value.console).toBe(true);
		expect(typeof value.file).toBe("string");
		expect(value.file).toBe(DESTINATION_RESULT);
		expect(value.tracker).toBe(true);
	});
});
