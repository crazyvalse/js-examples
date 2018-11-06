async function f() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('done!'), 1000)
	})
	let result = await promise // 直到promise返回一个resolve值（*）
	console.info(result) // 'done!'
}
f()


