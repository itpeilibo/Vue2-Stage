(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

    function initState (vm) {
        let opts = vm.$options;
        console.log('opts',opts);
        // 判断
        if (opts.props) ;
        if (opts.data) {
             initData();
        }
        if (opts.watch) ;
        if (opts.computed) ;
        if (opts.methods) ;
    }

    // vue2 对data初始化
    function initData (vm) {
        console.log('data初始化');

    }

    function initMixin(Vue) {
        Vue.prototype._init = function(options) {
            console.log(options);
            let vm = this;
            vm.$options = options;
            // 初始化状态
            initState(vm);
        };
    }

    function Vue (options) {
    	console.log(options); 
    //     // 初始化
        this._init(options);
    }
    initMixin(Vue);

    return Vue;

}));
//# sourceMappingURL=vue.js.map
