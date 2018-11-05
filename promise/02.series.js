let p1 = new Promise((resolve, reject) => {
		resolve(42);
	}
);

p1.then((value) => {
		console.info(value);
	}
).then(() => {
		console.info('finished');
	}
);


 
