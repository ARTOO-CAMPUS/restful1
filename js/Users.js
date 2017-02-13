var Users = (function () {

	var getUsers = function () {
		return $.ajax({
			url: 'https://jsonplaceholder.typicode.com/users',
			method: 'GET'
		});
	}

	return {
		getUsers: getUsers
	}
})();