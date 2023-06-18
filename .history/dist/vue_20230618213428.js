(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

	// import { initMixin } from "./init";

	function Vue (options) {
	    console.log(100);
		// console.log(options);
	//     // 初始化
	//     this._init(options)
	}

	return Vue;

}));
//# sourceMappingURL=vue.js.map
