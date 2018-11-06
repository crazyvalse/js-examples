let promise2 = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise2.catch((error) => {
	console.info(error.message)
});
