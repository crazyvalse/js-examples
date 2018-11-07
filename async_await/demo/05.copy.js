let d = null;
let promise = new Promise((resolve) => {
		resolve({
			a: 1,
			b: 2,
			c: {
				d: 4
			}
		})
	}
);

promise.then((data) => {
	return new Promise((resolve) => {
		data.c.d = 5;
		resolve(data)
	});
}).then((data) => {
	console.info(JSON.parse(JSON.stringify(data)))
});


promise.then((data) => {
	console.info(JSON.parse(JSON.stringify(data)))
	return data
}).then((data) => {
	console.info(JSON.parse(JSON.stringify(data)))
});
