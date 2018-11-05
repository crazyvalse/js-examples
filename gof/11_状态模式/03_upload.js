/**
 * Created by codingnuts on 2018/5/27.
 */

//上传的组件
var plugin = (function () {
	var plugin = {};

	plugin.type = "application/txftn-webkit";

	plugin.sign = function () {
		console.info("开始文件扫描！");
	};

	plugin.pause = function () {
		console.info("暂停文件上传！");
	};

	plugin.uploading = function () {
		console.info("开始文件上传！");
	};

	plugin.del = function () {
		console.info("删除文件上传！");
	};

	plugin.done = function () {
		console.info("文件上传完成！")
	};

	return plugin;
})();

//上传对象
var Upload = function (fileName) {
	this.plugin = plugin;
	this.fileName = fileName;

	this.signState = new SignState(this);
	this.uploadingState = new UploadingState(this);
	this.pauseState = new PauseState(this);
	this.doneState = new DoneState(this);
	this.errorState = new ErrorState(this);
	this.currState = this.signState;
};

Upload.prototype.init = function () {
	console.info("初始化上传组件！");
};

Upload.prototype.sign = function () {
	this.plugin.sign();
	this.currState = this.signState;
};

Upload.prototype.uploading = function () {
	this.plugin.uploading();
	this.currState = this.uploadingState;
};

Upload.prototype.pause = function () {
	this.plugin.pause();
	this.currState = this.pauseState;
};

Upload.prototype.done = function () {
	this.plugin.done();
	this.currState = this.doneState;
};

Upload.prototype.error = function () {
	this.currState = this.errorState;
};

Upload.prototype.del = function () {
	this.plugin.del();
};


var StateFactory = (function () {
	var State = function () {

	};

	State.prototype.clickHandler1 = function () {
		throw new Error("子类必须重写父类的 clickHandler1 方法");
	};

	State.prototype.clickHandler2 = function () {
		throw new Error("子类必须重写父类的 clickHandler2 方法");
	};

	return function (param) {
		var F = function (uploadObj) {
			this.uploadObj = uploadObj;
		};

		F.prototype = new State();

		for( var i in param){
			F.prototype[i] = param[i];
		}

		return F;
	}
})();

var SignState = StateFactory({
	clickHandler1: function () {
		console.info("扫描中，点击无效...");
	},
	clickHandler2: function () {
		console.info("文件正在上传中，不能删除");
	}
});

var UploadingState = StateFactory({
	clickHandler1: function () {
		this.uploadObj.pause();
	},
	clickHandler2: function () {
		console.info("文件正在上传中，不能删除");
	}
});

var PauseState = StateFactory({
	clickHandler1: function () {
		this.uploadObj.uploading();
	},
	clickHandler2: function () {
		this.uploadObj.del();
	}
});

var DoneState = StateFactory({
	clickHandler1: function () {
		console.info("文件已完成上传，点击无效...");
	},
	clickHandler2: function () {
		this.uploadObj.del();
	}
});

var ErrorState = StateFactory({
	clickHandler1: function () {
		console.info("上传失败，点击无效...");
	},
	clickHandler2: function () {
		this.uploadObj.del();
	}
});

var state = "uploading";

var uploadObj = new Upload("Javascript 设计模式与开发实践");
uploadObj.init();

uploadObj.currState.clickHandler1()
uploadObj.currState.clickHandler1()
uploadObj.currState.clickHandler1()


uploadObj.currState.clickHandler2()

uploadObj[state]();