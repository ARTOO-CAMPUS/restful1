var Posts = (function () {

	var getPosts = function () {
		return $.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: 'GET'
		});
	}
	var getComments = function (id) {
		return $.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts/' + id + '/comments',
			method: 'GET'
		});
	}

	return {
		getPosts: getPosts,
		getComments: getComments
	}
})();