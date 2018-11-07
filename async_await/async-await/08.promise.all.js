
async function foo () {
	try {
		let result = await Promise.all([
			new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
			new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
			new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))  // 3
		])
	}catch (e) {
		console.info(e.message)
	}

}

foo()


