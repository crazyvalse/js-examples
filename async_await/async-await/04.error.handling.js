
	async function f() {
		await Promise.reject(new Error("Whoops!"));
	}


	async function f() {
		throw new Error("Whoops!");
	}


