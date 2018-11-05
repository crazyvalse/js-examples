/**
 * Created by codingnuts on 2018/9/2.
 */
var myName: string = "zac"; //字符串

var age: number = 13;   //数字

age = myName;

var isMan: boolean = true;  //布尔型

var alias: any = "Isaac";   //任何类型值

var nums: Array<number> = [];   //数组指定类型

function foo(name:string): void {}  // 改方法不需要返回值

function foo01 (a:string, b:string, c:string = "zac"): void{
    console.log(a);
    console.log(b);
    console.log(c);
}

//自定义类型
class Person{
    name: string;
    age: number;
}

//类
var xiaoli: Person = new Person();


