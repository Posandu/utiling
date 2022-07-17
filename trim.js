/**
 * Trim a string
 * @param {String} str
 * @param {String} char The character to remove.
 * @returns
 */
function trim(str, char = " ") {
	const regex = new RegExp("^[" + char + "]+|[" + char + "]+$", "g");
	return str.replace(regex, "");
}

export default trim;
