
	async function f() {
		return 1;
	}

	f().then(console.info); // 1


	async function _f() {
		return Promise.resolve(1);
	}

	f().then(alert); // 1


	
