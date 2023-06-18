(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue = {}));
})(this, (function (exports) { 'use strict';

    function initMixin(Vue) {
        Vue.prototype._init = function(options) {
            console.log(options);
        };
    }

    const a = 10;
    let index = {
        a: 1,

    }
    // function Vue (options) {
    // 	console.log(options);
    //     // 初始化
    //     this._init(options);
    // }
    initMixin(Vue);

    exports.a = a;
    exports.default = a;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vue.js.map
