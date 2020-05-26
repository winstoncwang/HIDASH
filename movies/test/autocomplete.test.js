//helper
const waitFor = (selector) => {
	return new Promise((resolve, reject) => {
		//setIntervale to check
		const interval = setInterval(() => {
			if (document.querySelector(selector)) {
				clearInterval(interval);
				clearTimeout(timeout);
				resolve();
			}
		}, 30);

		const timeout = setTimeout(() => {
			clearInterval(interval);
			reject();
		}, 2000);
	});
};

//initiate the testing environment
beforeEach(() => {
	//empty search bar
	document.querySelector('#target').innerHTML = '';
	//any value we type should show a list of results
	createAutoComplete({
		root         : document.querySelector('#target'),
		fetchData () {
			return [
				{ Title: 'Avengers' },
				{ Title: 'Tom and Jerry' },
				{ Title: 'Bob Builder' },
				{ Title: 'Tommy' }
			];
		},
		renderOption (movie) {
			return `${movie.Title}`;
		}
	});

	//testing dropdown component should be defaulted to no showing
	//using chai.js from html, assertion module similar to node's

	const dropdown = document.querySelector('.dropdown');
	assert.notInclude(dropdown.className, 'is-active');
});

it('Dropdown starts closed', () => {
	//any value we type should show a list of results

	createAutoComplete({
		root         : document.querySelector('#target'),
		fetchData () {
			return [
				{ Title: 'Avengers' },
				{ Title: 'Tom and Jerry' },
				{ Title: 'Bob Builder' },
				{ Title: 'Tommy' }
			];
		},
		renderOption (movie) {
			return `${movie.Title}`;
		}
	});

	//testing dropdown component should be defaulted to no showing
	//using chai.js from html, assertion module similar to node's

	const dropdown = document.querySelector('.dropdown');
	assert.notInclude(dropdown.className, 'is-active');
});

it('After searching, dropdown opens up', async () => {
	const input = document.querySelector('input');
	input.value = 'avengers';
	input.dispatchEvent(new Event('input'));

	//wait for content then check for opening up of dropdown
	//helper function
	await waitFor('.dropdown-item');

	//because of debounce used for input value, search result is not instant
	//hence we need to hold assertion
	const dropdown = document.querySelector('.dropdown');
	assert.include(dropdown.className, 'is-active');
});

it('After searching, display the same amount of result as initialised', async () => {
	const input = document.querySelector('input');
	input.value = 'avengers';
	input.dispatchEvent(new Event('input'));

	//wait for content then check for opening up of dropdown
	//helper function
	await waitFor('.dropdown-item');

	const items = document.querySelectorAll('.dropdown-item');
	assert.equal(items.length, 4);
});
