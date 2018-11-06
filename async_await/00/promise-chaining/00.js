

new Promise(function(resolve, reject) {

	setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

	console.info(result); // 1
	return result * 2;

}).then(function(result) { // (***)

	console.info(result); // 2
	return result * 2;

}).then(function(result) {

	console.info(result); // 4
	return result * 2;

});
