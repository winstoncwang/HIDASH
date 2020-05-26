it('Shows an autocomplete', () => {
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
