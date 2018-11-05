let p1 = new Promise((resolve, reject) => {
	resolve(42);
});

let p2 = new Promise((resolve, reject) => {
	resolve(52);
});

p1.then((value) => {
	console.info(value);
	return p2;
}).then((value) => {
		console.info(value)
	}
);

// reject

let p3 = new Promise((resolve, reject) => {
	resolve(62);
});

let p4 = new Promise((resolve, reject) => {
	reject(72);
});

p3.then((value) => {
	console.info(value);
	return p4;
}).then((value) => {
	console.info('then', value)
}).catch((value) => {
	console.info('catch', value)
});
