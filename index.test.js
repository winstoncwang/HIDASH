const { forEach, map } = require('./index');
const assert = require('assert');

const test = (desc, fn) => {
	console.log(`---------${desc}---------`);
	try {
		fn();
	} catch (err) {
		console.log(`Found ${err}`);
	}
};

test('forEach function', () => {
	let sum = 0;
	forEach([ 1, 2, 3 ], (value) => {
		sum += value;
	});

	assert.strictEqual(sum, 6, 'forEach should sum up the value to 6');
});

test('map function', () => {
	const result = map([ 1, 2, 3 ], (value) => {
		return value * 2;
	});

	//result = [2,4,6]

	assert.deepStrictEqual(result, [ 2, 4, 7 ]);
});
