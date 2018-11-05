let promise = new Promise(function (resolve, reject) {
	console.info("promise")
	//resolve("yo ho");
	reject("re");
});
promise.then(function (content) {
	console.info(content);
});

promise.catch(function (content) {
	console.info(content);
});

console.info("hi");


