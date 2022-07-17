let i = 0;

/**
 * ID that is unique within the current process.
 * @returns {string}
 */
function nanoId() {
	let id = i.toString(16);

	return "_" + id;
}

export default nanoId;
