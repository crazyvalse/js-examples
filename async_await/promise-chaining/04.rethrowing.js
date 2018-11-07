// the execution: catch -> then
/*
new Promise(function(resolve, reject) {

	throw new Error("Whoops!");

}).catch(function(error) {

	console.info("The error is handled, continue normally");

}).then(() => console.info("Next successful handler runs"));
*/


// the execution: catch -> catch -> then
new Promise(function(resolve, reject) {

	throw new Error("Whoops!");

}).catch(function(error) { // (*)

	if (error instanceof URIError) {
		// handle it
	} else {
		console.info("Can't handle such error");

		throw error; // throwing this or another error jumps to the next catch
	}

}).then(function() {
	/* never runs here */
}).catch(error => { // (**)

	console.info(`The unknown error has occurred: ${error}`);
	// don't return anything => execution goes the normal way

});
