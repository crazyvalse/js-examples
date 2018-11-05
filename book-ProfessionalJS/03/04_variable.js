/**
 * Created by codingnuts on 2018/2/10.
 */

/**
 * 1. 5种基本类型: undefined null boolean number string
 * 2. Object
 */

/**
 * 1. typeof 检测数据类型: undefined boolean string number object function
 */

/*
 var msg = "some string";

 console.info(typeof msg);   //string
 console.info(typeof msg);   //string
 console.info(typeof 95);    //number
 */

/**
 * 2. undefined: 使用 var 声明 但是未对其加以初始化；
 */
/*var message;    //-----等价于 var message = undefined; //默认就是 undefined。

 console.info(message == undefined);*/

// typeof
/*
 var message;

 console.info(typeof message);
 console.info(typeof age);
 */

/**
 * 3. null: 空对象指针; 是第二个只有一个值的数据类型;
 * ------ undefined不需要显式赋值； null显式赋值具有特殊意义 标明将用于保存对象；
 * @type {null}
 */
/*
 var car = null;
 console.info(typeof car);   //object
 console.info(null == undefined);  //true  ------ undefined 派生自 null 值
 */

/**
 * 4. boolean: 只有两个字面值： true 和false, 这两个值与数字值不是一回事， 因此true 不一定等于1， 而false 也不一定等于0；
 * @type {boolean}
 */

/*var found = true;

 //4.1 可以使用 Boolean() 转换boolean类型；
 var message = "Hello world";
 var messageAsBoolean = Boolean(message);

 console.info(messageAsBoolean);

 /!**
 * boolean    true    false
 * string     任何非空字符串   ""(空字符串)
 * number     任何非零数字值   0和NaN
 * Object     任何对象        null
 * undefined  n/a           undefined
 *!/
 if (message) {
 console.info("value is true;");
 }

 console.info(Boolean(""));

 */


/**
 * 5. number
 * @type {number}
 */
/*
 var intNum = 55;  // 整数

 // 5.2 八进制： 以0开头
 var octalNum1 = 070;  //  八进制的  56
 var octalNum2 = 079;  //  无效的八进制  79
 var octalNum3 = 08;  //  无效的八进制   8

 console.info(070);  // 56

 // 5.3 十六进制： 以0x开头
 var hexNum1 = 0xA;    //  十六进制的10
 var hexNum2 = 0x1f;    //  十六进制的31

 //5.4 浮点数
 var floatNum1 = 1.1;
 var floatNum2 = .1;   //有效，但是不推荐

 var floatNum3 = 1.0;    //------ 会被当整数保存下来， 因为浮点数是整数的两倍

 var floatNum4 = 3.12e7; //------ 科学计数法
 */

//不要做这样的测试  ------ 避免浮点计算
/*if(a+b == 0.3) {
 console.info("you got 0.3");
 }*/

//5.3 NaN 的两个特点： a、任何和NaN一起的计算都是 NaN；b、与任何值都不相等，连自己也不相等,需要使用 isNaN() 函数来判断
/*console.info(NaN == NaN);

 console.info(isNaN(NaN));
 console.info(isNaN(10));
 console.info(isNaN("10"));
 console.info(isNaN("blue"));
 console.info(isNaN(true));*/

//5.4 数值转换 - Number() / parseInt() / parseFloat
/**
 * boolean: 1/0
 * null: 0
 * undefined: NaN
 * String:
 *  a. 包含有数字转为十进制数值
 *  b. 字符中符合有效的浮点格式，会转为相应的数值
 *  c. 如果是十六进制格式，会将其转为相同大小的十进制整数值
 *  d. 如果是空字符串: 9,
 *  e. 其他为NaN
 * Object: 会调用对象的 valueOf() 方法，按照前面的方式转换
 *
 */

/*
 var n1 = Number("Hello world");
 var n2 = Number("");
 var n3 = Number("000011");
 var n4 = Number(true);
 var n5 = Number("1k2");   //NaN
 var n6 = Number("1e2");   //NaN
 console.info(n1, n2, n3, n4, n5, n6);
*/

/**
 * parseInt: 由于Number复杂且不合理，所以常用parseInt函数
 * 会找到第一个非数字的字符，也可以转换格式（十进制、八进制、十六进制）
 *
 */
/*
 console.info(parseInt("1234blue"));
 console.info(parseInt("123dfsd4"));
 console.info(parseInt("sadf1234blue"));   //如果第一个字符不是数字，返回NaN
 console.info(parseInt(""));
 console.info(parseInt("22.5"));   //22
 console.info(parseInt("070"));
 console.info(parseInt("70"));
 console.info(parseInt("0xf"));

 console.info(parseInt("AF", 16));   // ----- 十六进制
 console.info(parseInt("AF"))


 console.info(parseFloat("0xf"));  //只解析十进制值
 */

/**
 * 4.6 String
 * 在js中字符串是不可变的。 字符串一旦创建，他们的值就不能改变。
 * 要改变某个变量保存的字符串，先要销毁原来的字符串，然后在用另一个包含新值的字符串填充该变量
 * @type {string}
 */
/*var lang = "java";
 lang = lang + "script";*/
// 上面操作的实际流程是：
// 1. 创建一个容纳10个字符的新字符串；2. 在这个字符串中填充 java 和 script； 3. 销毁原来的 java 和 script；


// 4.6.1 转换为字符串 .toString() , 但是 undefined 和 null 没有这个方法
// 可以转换2 8 16 进制
/*var num = 10;
console.info(num.toString());
console.info(num.toString(2));
console.info(num.toString(8));
console.info(num.toString(10));
console.info(num.toString(16));*/

//4.6.2 String() 方法，可以判断 null 和 undefined
/*
var v1 = 10;
var v2 = true;
var v3 = null;
var v4;

console.info(String(v1));
console.info(String(v2));
console.info(String(v3));
console.info(String(v4));

*/

console.info(null == undefined);



















