import {
	memo,
	makeUnique,
	nanoId,
	random,
	repeat,
	searchArray,
	trim,
} from "./index.js";
import { c } from "tcol";

/**
 * Tests
 */
let i = 1;
let failed = 0;
let passed = 0;

const expect = (results, expected, desc) => {
	const actual = JSON.stringify(results);
	expected = JSON.stringify(expected);

	console.log(`-`.repeat(80));

	console.log(c.Black(`Test #${i} - ${desc}`));

	if (actual !== expected) {
		console.log(c.Red(`TEST #${i} - FAILED`));
		console.log(`Expected: ${expected}`);
		console.log(`Actual: ${actual}`);
		failed++;
	} else {
		console.log(c.Green(`TEST #${i} - PASSED`));
		passed++;
	}

	console.log(`-`.repeat(80));
};

/**
 *
 *
 */

/**
 * Function memoization
 */
const _rand = () => 40 + Math.floor(Math.random() * 40);
const _saved = memo(_rand);

expect(memo(_rand), _saved, "memo");

/**
 * Nanoid
 */
expect(nanoId(), "_0", "nanoId");

/**
 * Random
 */
expect(random(1, 1), 1, "random");

/**
 * Repeat
 */
let _repeatI = 0;
repeat(() => _repeatI++, 4);

expect(_repeatI, 4, "repeat");

/**
 * Search array
 */
const _searchArray = ["obama", "joe", "mama", "deez"];
expect(searchArray(_searchArray, "a"), ["obama", "mama"], "searchArray");
expect(searchArray(_searchArray, "a", true), [], "searchArrayExact");
expect(searchArray(_searchArray, "obama", true), ["obama"], "searchArrayExact");

/**
 * Trim
 */
expect(trim("  hello  "), "hello", "trim");
expect(trim("| hello |", "|"), " hello ", "trim");

/**
 * Make unique
 */
expect(
	makeUnique(["a", "b", "c", "a", "b", "c"]),
	["a", "b", "c"],
	"makeUnique"
);

/**
 *
 *
 */

console.log(`${failed} tests failed, ${passed} tests passed.`);

export { memo, nanoId, random, repeat, searchArray, trim, makeUnique };
