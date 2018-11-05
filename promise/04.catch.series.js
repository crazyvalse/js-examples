let p1 = new Promise((resolve, reject) => {
		throw new Error('Explosion!');
	}
);

p1.catch((error) => {
	console.info(error.message);
	throw new Error('Boom!');
}).catch((error) => {
	console.info(error.message);
});
