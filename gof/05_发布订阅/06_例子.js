/**
 * Created by codingnuts on 2018/4/15.
 */
var Event = function () {
	this.clientList = {};
};

Event.prototype = {
	listen: function (key, fn) {
		if (!this.clientList[key]) {
			this.clientList[key] = [];
		}
		this.clientList[key].push(fn);
	},
	trigger: function () {
		var key = Array.prototype.shift.call(arguments),
			fns = this.clientList[key];

		if (!fns || fns.length === 0) {
			return false;
		}

		for (var i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments);
		}
	},
	remove: function (key, fn) {
		var fns = this.clientList[key];
		if (!fns) {
			return false;
		}
		if (!fn) {    //如果没传具体的fn，表明取消所有的对应key的订阅
			fns && (fns.length = 0);
		} else {
			for (var i = fns.length - 1; i >= 0; i--) {   //反向便令订阅的回调函数
				var _fn = fns[i];
				if (_fn === fn) {
					fns.splice(i, 1);
				}
			}
		}
	}
};

var getSingleton = function (fn) {
	var instance;
	return function () {
		return instance || (instance = fn.apply(this, arguments));
	};
};

var loginBusLoader = getSingleton(function () {
	return new Event();
});

/**
 * 需要更新头像、需要更新消息列表、需要更新购物车
 */
var LOGIN_BUS = loginBusLoader();


var NavLoader = getSingleton(function () {
	var _Nav = {
		setAvatar: function (avatar) {
			console.info("设置头像: " + avatar);
		}
	};

	LOGIN_BUS.listen("loginSuccess", function ({cart}) {
		_Nav.setAvatar(cart);
	});

	return _Nav;
});


var header = (function () {
	var _header = {
		setNav: function (nav) {
			console.info("跟新导航: " + nav);
		}
	};
	LOGIN_BUS.listen("loginSuccess", function ({nav}) {
		_header.setNav(nav);
	});

	return _header;
})();


var message = (function () {
	LOGIN_BUS.listen("loginSuccess", function ({msg}) {
		message.setMessage(msg);
	});

	return {
		setMessage: function (msg) {
			console.info("刷新信息列表：" + msg);
		}
	};
})();

var Cart = (function () {
	LOGIN_BUS.listen("loginSuccess", function ({cart}) {
		Cart.setCart(cart);
	});

	return {
		setCart: function (cart) {
			console.info("刷新信息列表：" + cart);
		}
	};
})();


var ajax_success = (function () {
	LOGIN_BUS.trigger("loginSuccess", {
		cart: "这是购物车",
		msg: "这是新的信息列表",
		avatar: "这是新的头像",
		nav: "这是新的导航"
	});
})();
