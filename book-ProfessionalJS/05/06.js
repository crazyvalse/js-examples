/**
 * Created by codingnuts on 2018/2/21.
 * 包装类型: Boolean, Number, String
 */

//1. 字符方法
var stringValue = "hello world";
/*console.info(stringValue.charAt(1));
console.info(stringValue.charCodeAt(1));
console.info(stringValue[1]);*/

//2. 字符串操作方法
var result = stringValue.concat(", lilei");
console.info(result);
console.info(stringValue);
console.info(result.concat("!", "yo!"));

//3. 截取字符串 slice、substring、substr
//4. 字符串位置方法 indexOf lastIndexOf
//5. trim 方法
//6. toLocaleUpperCase() toUpperCase toLowerCase


var uri = "http://www.codingnuts.com/illegal value.html#start五四三";
console.info(encodeURI(uri));  //不会对uri本身的特殊字符进行编码 对应的是 decodeURI()
console.info(encodeURIComponent(uri));    //对所有的特殊字符进行处理，对应的是 decodeURIComponent()























