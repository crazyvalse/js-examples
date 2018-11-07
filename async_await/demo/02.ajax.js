const myAjax = new Promise((resolve, reject) => {
	var code = 400; //!=200
	var data = {
		a: 666
	}
	setTimeout(() => {
		if (code == 200) {
			resolve(data)
		} else {
			reject(new Error('error'))
		}
	}, 5000);
});


myAjax.then((data) => {
	console.info(data)
}).catch(error => console.info(error));
