let promise = new Promise((resolve, reject) => {
	console.info(1)
	resolve(2)
});

promise.then(value => console.info(value))

console.info(3)
