
	async function f() {
		return 1;
	}

	f().then(console.info); // 1

	function _f() {
		return Promise.resolve(1);
	}

	_f().then(console.info); // 1



