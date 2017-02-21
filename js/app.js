$(document).ready(function () {

	$("#users").click(function () {
		Users.getUsers().then(function (data) {
			console.log(data);
			var str = "";
			for (let i = 0; i < data.length; i++) {
				str += `<p>${data[i].name}</p>`;
			}
			$("#dati").html(str);
		});

	});

	$("#posts").click(function () {
		Posts.getPosts().then(function (data) {
			console.log(data);
			var str = "";
			for (let i = 0; i < data.length; i++) {
				str += `<p>${data[i].title}</p>`;
			}
			$("#dati").html(str);
		});

	});

	$("#comments").click(function () {
		console.log("here");
		Posts.getComments(10).then(function (data) {
			console.log(data);
			var str = "";
			for (let i = 0; i < data.length; i++) {
				str += `<p>${data[i].body}</p>`;
			}
			$("#dati").html(str);
		});

	});


});