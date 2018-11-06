async function foo() {
	return 1
}

foo().then(console.info)

async function foo1() {
	return Promise.resolve(1)
}
foo1().then(console.info)
