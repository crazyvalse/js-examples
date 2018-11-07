
new Promise(function(resolve, reject) {

	setTimeout(() => resolve(1), 1000);

}).then(function(result) {

	console.info(result); // 1

	return new Promise((resolve, reject) => { // (*)
		setTimeout(() => resolve(result * 2), 1000);
	});

}).then(function(result) { // (**)

	console.info(result); // 2

	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(result * 2), 1000);
	});

}).then(function(result) {

	console.info(result); // 4

});
