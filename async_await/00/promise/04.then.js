let promise = new Promise(function(resolve, reject) {
	setTimeout(() => resolve("done!"), 1000);
	//setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// resolve runs the first function in .then
promise.then(
	result => console.info(result), // shows "done!" after 1 second
	error => console.info(error) // doesn't run
);

