/**
 * Created by codingnuts on 2018/3/5.
 */
var age = 29;
function sayAge () {
	console.info(this.age);
}

sayAge();

//不能从全局中删除对象
delete age;
console.info(age);

console.info(top)



