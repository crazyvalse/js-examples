async function showData() {
	// 假装请求数据1
	var data1 = await new Promise((resolve) => {
		setTimeout(() => {
			resolve('data1');
		}, 1000);
	});

	// 假装请求数据2且此请求依赖数据1
	var data2 = await new Promise((resolve) => {
		setTimeout(() => {
			resolve('data2');
		}, 1000);
	});

	console.info(typeof data2)
	// 展示数据2
	//console.log(data2);

}

console.info(1);
console.info( showData() instanceof Promise)
console.info(2)
