
let promise = new Promise(resolve => {
	setTimeout(() => resolve("done!"), 1000);
});

promise.then(console.info); // shows "done!" after 1 second

let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise2.catch(console.info); // shows "Error: Whoops!" after 1 second
