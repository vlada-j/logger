module.exports = {

	isFunction: input => typeof input === "function",

	isBoolean: input => typeof input === "boolean",

	isString: input => typeof input === "string",

	isObject: input => typeof input === "object" && input !== null && !(input instanceof Array),

	dateFormat(d) {
		d = d || new Date();
		return d.toISOString().replace('T', ' ').replace(/\.\d+Z/g, '');
	},

	fileNameNormalize: text => text.replace(/\s/g, '_').replace(/:/g, '-'),

	fill: (ch, n) => Array.apply(null, Array( n + 1 )).join(ch),

}
