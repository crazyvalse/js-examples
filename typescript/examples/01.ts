/**
 * Created by codingnuts on 2018/9/3.
 */

interface IPerson {
    name: string;
    age: number;

}

//类的声明
class Person implements IPerson {

    constructor(public name: string, public age = 10) {
        this.name = name;
        this.age = age;
        console.log("haha");
    }// 类的构造函数，只在实例化时被调用，而且被调用一次；

    public eat(): void {
        console.log("im eating");
    }
}

//子类拥有父类的属性和方法,还可以自定义自己属性和方法
class Employee extends Person {
    code: string;

    constructor(name: string, code: string) {
        super(name);//子类构造函数必选调用父类构造函数
        console.log("xixi");
        this.code = code;
    }

    work() {
        super.eat();//调用父类方法
        this.doWork();
    }

    private doWork() {
        console.log("im working");
    }
}

//类的实例化

var e1 = new Employee("name", "1");
e1.work();

var p1 = new Person("batman");
p1.eat();

var p2 = new Person("superman");
p2.eat();
