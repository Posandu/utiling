/**
 * Random number generator
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default random;
