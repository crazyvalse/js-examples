/**
 * Created by isaac_gu on 2015/12/4.
 */

/**
 * Tools 命名空间
 */
var Tools = {};


/**
 * 鸭式变形接口
 * 一个类实现接口的主要目的就是把接口里的方法全都实现了
 * 完全面向对象 代码也实现统一 也实现解耦了
 */
/**
 * #1. 接口类需要2个参数
 * 参数1： 接口的名字
 * 参数2： 接受方法名称的集合（数组）
 */
/**
 * 接口
 * @param name
 * @param methods
 * @constructor
 */
Tools.Interface = function(name, methods){
    //判断接口的参数个数
    if(arguments.length != 2){
        throw new Error("this instance interface constructor arguments must be 2!");
    }
    this.name = name;
    this.methods = [];      //定义一个内置的空数组对象 等待接收methods里的元素（方法名称）
    for(var i = 0, len = methods.length; i < len; i++){

        if(typeof methods[i] !== 'string'){
            throw new Error("the interface method name ");
        }
        this.methods.push(methods[i]);
    }

}

/**
 * #2. 检验里的方法
 * 如果通过，不做任何操作；如果不通过， 浏览器跑出error
 */
//这个方法的目的 就是坚持方法的
/**
 * 接口的静态方法
 * @param object
 */
Tools.Interface.ensureImplements = function(object){
    //如果检测的方法的参数小于2个 参数传递失败！
    if(arguments.length < 2){
        throw new Error('this instance interface constructor arguments must be 2!');
    }

    //获得接口实例对象
    for(var i = 1, len = arguments.length; i < len; i++){
        var instanceInterface = arguments[i];
        //判断参数是否是接口的类型
        if(instanceInterface.constructor !== Tools.Interface){
            throw new Error("the arguments constructor not be interface class!");
        }
        //循环接口实例对象里面的每一个方法
        for(var j = 0; j < instanceInterface.methods.length; j++){
            //string 用一个临时变量接收每一个方法的名字
            var methodName = instanceInterface.methods[j];
            //object[key] 就是方法
            //不纯在，或者存在但不是函数
            if(!object[methodName] || typeof object[methodName] !== 'function'){
                throw new Error('the method [' + methodName + '] is not found');
            }
        }
    }

}

/**
 * 继承
 * @param sub
 * @param sup
 */
Tools.extend = function(sub, sup){
    //1. 实现只继承父类的原型对象 - 用一个空函数进行中转
    var F = new Function();
    //2. 实现了空函数和父类的原型兑现高转换
    F.prototype = sup.prototype;
    //3. 原型继承
    sub.prototype = new F();
    //4. 还原子类的构造器
    sub.prototype.constructor = sub;
    //保存一下父类的原型对象； 一方面方便解耦；另一方面可以轻松获得父类的原型对象
    sub.superclass = sup.prototype;

    //#3. 加保险 - 判断父类的原型构造器
    if(sup.prototype.constructor == Object.prototype.constructor){
        sup.prototype.constructor = sup; //手动还原父类的构造器
    }

}

Tools.EventUtil = {
    addHandler: function(element, type, handler){
        //ff
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if(element.attachEvent){ //ie
            element.attachEvent("on" + type, handler, false);
        }
    },
    removeHandler: function(element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if(element.detachEvent){ //ie
            element.detachEvent("on" + type, handler, false);
        }
    }

}










