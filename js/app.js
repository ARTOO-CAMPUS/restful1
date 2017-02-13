$(document).ready(function () {

	$("#users").click(function () {
		Users.getUsers().then(function (data) {
			console.log(data);
		});

	});

	$("#posts").click(function () {
		Posts.getPosts().then(function (data) {
			console.log(data);
		});

	});

	$("#comments").click(function () {
		console.log("here");
		Posts.getComments(10).then(function (data) {
			console.log(data);
		});

	});


});