let p1 = new Promise((resolve, reject) => {
	resolve(42);
});

let p2 = new Promise((resolve, reject) => {
	resolve(43);
});

let p3 = new Promise((resolve, reject) => {
	resolve(44);
});

let p4 = Promise.all([p1, p2, p3]);

p4.then((value) => {
	console.info(Array.isArray(value));
	console.info(value[0]);
	console.info(value[1]);
	console.info(value[2]);
});

