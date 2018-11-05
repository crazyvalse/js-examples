let p1 = new Promise((resolve, reject) => {
		resolve(42);
	}
);

p1.then((value) => {
	throw new Error('Boom!');
}).catch((error) => {
	console.info(error.message)
});
