const logger = require('../main');

describe('logger main', () => {
	test('Is defined', () => {
		expect(typeof logger).toBe("function");
	});

	test('logger.version is string', () => {
		expect(typeof logger.version).toBe("string");
	});

	test('logger.settings is function', () => {
		expect(typeof logger.settings).toBe("function");
	});

	test('logger.log is function', () => {
		expect(typeof logger.log).toBe("function");
	});

	test('logger.log can chained', () => {
		expect(logger.log(123)).toBe(logger);
	});

	test('logger.error is function', () => {
		expect(typeof logger.error).toBe("function");
	});

	test('logger.error can chained', () => {
		expect(logger.error(456)).toBe(logger);
	});

	test('logger.clear is function', () => {
		expect(typeof logger.clear).toBe("function");
	});

	test('logger.clear can chained', () => {
		expect(logger.clear()).toBe(logger);
	});
});
