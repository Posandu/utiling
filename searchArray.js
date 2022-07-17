/**
 * Search an array.
 * @param {Array} array
 * @param {String} value
 * @param {Boolean} exact
 * @returns {Array}
 */
function searchArray(array, value, exact = false) {
	let result = [];

	result = array.filter((item) => {
		if (exact) {
			return item === value;
		}

		return (item + "").includes(value + "");
	});

	return result;
}

export default searchArray;
