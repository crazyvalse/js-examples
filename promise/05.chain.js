let p = new Promise((resolve, reject) => {
		resolve(42);
	}
);

p.then((value) => {
	console.info(value)
	return value + 1;
}).then((value) => {
	console.info(value);
});
