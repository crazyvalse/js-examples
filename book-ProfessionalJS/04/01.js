/**
 * Created by codingnuts on 2018/2/16.
 */
/**
 * 基本类型和引用类型
 *
 * 基本类型： undefined、null、boolean、number、string 五种；
 * 引用类型： 操作对象的引用
 * @type {number}
 */

function setName (obj) {
	obj.name = "zac";
	obj = new Object();
	obj.name = "isaac";
}

var person = new Object();
setName(person);
console.info(person.name);

