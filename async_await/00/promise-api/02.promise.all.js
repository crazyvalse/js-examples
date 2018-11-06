Promise.all([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
	new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))  // 3
]).then(console.info);


let urls = [
	'https://api.github.com/users/iliakan',
	'https://api.github.com/users/remy',
	'https://api.github.com/users/jeresig'
];

// map every url to the promise fetch(github url)
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
	.then(responses => responses.forEach(
		response => console.info(`${response.url}: ${response.status}`)
	));
