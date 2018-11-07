// 函数声明
const foo1 = async function () {
};

// 函数表达式
let obj = {
	async foo () {
	}
};

// 对象的方法
obj.foo().then(() => {
	console.info('balabala')
});

// 箭头函数
const foo2 = async () => {

};

// class 的方法
class Storage {
	constructor () {
	}

	async getAvatar (name) {
		await this.read(name);
		console.info('done!')

	}

	read (name) {
		setTimeout(() => {
				console.info(name)
			},
			1000 * 5
		)
	}
}
