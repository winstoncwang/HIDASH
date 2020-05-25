it('Shows an autocomplete', () => {
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
});
