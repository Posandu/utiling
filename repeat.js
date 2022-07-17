/**
 * Repat a function n times
 * @param {Function} fn 
 * @param {Number} times 
 */
function repeat(fn, times) {
	let i = 0;

	while (i < times) {
		fn(i);
		i++;
	}
}

export default repeat;
