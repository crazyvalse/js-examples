let promise = new Promise((resolve, reject) => {
	// pending result
	reject("hoo");
});

promise.then((value) => {
	console.info(1, value)
})

promise.catch((value) => {
	console.info(value)
});
