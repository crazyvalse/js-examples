// an "immediately" resolved Promise
const executor = resolve => resolve("done!");
const promise = new Promise(executor);

promise.then(console.info); // this alert shows last (*)

console.info("code finished"); // this alert shows first

