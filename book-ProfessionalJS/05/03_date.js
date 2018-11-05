/**
 * Created by codingnuts on 2018/2/20.
 */
var now = new Date();   //可传参数，传参数就是制定时间

//Date.parse 和 Date.UTC();
/*var someDate = new Date(Date.UTC(1985, 11, 28, 2, 20));

console.info(someDate);
console.info(Date.now());*/

var today = new Date();

console.info(today.toLocaleString());
console.info(today.toString());
console.info(today.valueOf());

console.info(today.toDateString());
console.info(today.toTimeString());
console.info(today.toUTCString());




