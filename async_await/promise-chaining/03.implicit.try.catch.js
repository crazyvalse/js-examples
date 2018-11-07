
new Promise(function(resolve, reject) {
	throw new Error("Whoops!");
}).catch(error => console.info(error.message)); // Error: Whoops!

//Works the same way as this:
new Promise(function(resolve, reject) {
	reject(new Error("Whoops!"));
}).catch(error => console.info(error.message)); // Error: Whoops!

new Promise(function(resolve, reject) {
	resolve("ok");
}).then(function(result) {
	blabla(); // no such function
}).catch(error => console.info(error.message)); // ReferenceError: blabla is not defined

