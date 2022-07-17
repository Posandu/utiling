let mem = {};

/**
 * Memoize a function
 * @param {Function} fn 
 * @param  {...any} args 
 * @returns {any} The callback function's return value.
 */
function memo(fn, ...args) {
	let name = fn.name;
	let key = JSON.stringify(args) + name;

	if (!mem[key]) {
		mem[key] = fn(...args);
	}

	return mem[key];
}

export default memo;
