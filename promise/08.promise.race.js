//a. 只要有一个被解决，就返回结果
let p1 = Promise.resolve(41);

let p2 = new Promise((resolve, reject) => {
	resolve(42)
});

let p3 = new Promise((resolve, reject) => {
	resolve(43)
});

let p4 = Promise.race([p1, p2, p3]);

p4.then((value) => {
	console.info(Array.isArray(value))
	console.info(value)
})

console.info('----------------------')
//b. reject - 有拒绝调用 其他的resolve 就被忽略了~
let p5 = new Promise((resolve, reject) => {
	resolve(45)
});

let p6= Promise.reject(46);

let p7 = new Promise((resolve, reject) => {
	resolve(47)
});

let p8 = Promise.race([p5, p6, p7]);

p8.catch((value) => {
	console.info(Array.isArray(value))
	console.info(value)
})
