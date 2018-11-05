/**
 * Created by codingnuts on 2018/9/2.
 */
var myName = "zac"; //字符串
var age = 13; //数字
age = myName;
var isMan = true; //布尔型
var alias = "Isaac"; //任何类型值
var nums = []; //数组指定类型
function foo(name) { } // 改方法不需要返回值
function foo01(a, b, c) {
    if (c === void 0) { c = "zac"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
//自定义类型
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//类
var xiaoli = new Person();
//# sourceMappingURL=00.js.map