async function foo() {
	var a = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(1);
		}, 2000);
	});
	console.log(a); // 第2秒时输出: 1

	try {
		var b = await new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(2);
			}, 1000);
		})
	} catch (e) {
		console.log(e); // 第3秒时输出: 2
	}

	// 函数暂停2秒后再继续执行
	var sleep = await new Promise((resolve) => {
		setTimeout(() => {
			resolve('sleep');
		}, 2000);
	});

	var c = await 3;
	console.log(c); // 第5秒时输出: 3
}

foo();
