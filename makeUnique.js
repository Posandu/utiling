/**
 * Make all elements in the array unique.
 * @param {Array} array
 * @returns {Array}
 */
function makeUnique(array) {
	return [...new Set(array)];
}

export default makeUnique;
