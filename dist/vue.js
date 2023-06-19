(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

    // 重写数组 
    // (1) 获取原来的数组方法

    let oldArrayProtoMethods = Array.prototype;

    // (2) 继承 
    let ArrayMethods = Object.create(oldArrayProtoMethods);

    // 劫持

    let methods = [
        "push",
        "pop",
        "unshift",
        "shift",
        "splice"
    ];

    methods.forEach (item => {
        ArrayMethods[item] = function (...args) { // {list: []} list.push()
            console.log('劫持数组');
            let result = oldArrayProtoMethods[item].apply(this, args);
            return result
        };
    });

    function observer (data) {
        // 1  判断
        if (typeof data != 'object' || data === null) {
            return data
        }
        // 1 对象通过一个类
        return  new Observer (data)
        
    }

    class Observer {
        constructor (value) {
            console.log('数据aaa',value);
            // 判断数据
            if (Array.isArray(value)) { // list: [1,2,3]
                console.log('数组'); 
                value.__proto__ = ArrayMethods;

            } else {
            this.walk(value); // 遍历
            }
        }
        walk(data) {  // {msg: 'hello'}
            let keys = Object.keys(data);

            for (let i = 0; i < keys.length;i++) {
                // 对象我们的每个属性进行劫持
                let key = keys[i];
                let value = data[key];
                defineReactive(data,key,value);
            } 
        }
    }
    // 对对象中的属性进行劫持
    function defineReactive (data, key, value) { // { a: { b: 1}}
        observer(value); // 深度代理
        Object.defineProperty(data,key, {
            get () {
                console.log('获取');
                return value
            },
            set (newValue) {
                console.log('设置',newValue);
                if (newValue === value) return
                observer(newValue); // 如果用户设置的值是对象
                value = newValue;
            }
        });
    }

    // vue Object.defineProperty 缺点 对象中的一个属性 {a:1, b:2}

    // {a: {}, list: []}

    // 总结: (1) 对象
    // 1 Object.defineProperty 有缺点 只能 对象中的一个属性 进行劫持
    // 2 遍历 {a: 1, b: 2, obj: {}}
    // 3 get set

    // 2 数组 { list: [1,2,3,4], arr: [ {a:1}]}
    // 方法函数劫持， 重写数组方法 arr.push(1)

    function initState (vm) {
        let opts = vm.$options;
        // console.log('opts',opts);
        // 判断
        if (opts.props) ;
        if (opts.data) {
             initData(vm);
        }
        if (opts.watch) ;
        if (opts.computed) ;
        if (opts.methods) ;
    }

    // vue2 对data初始化
    function initData (vm)  {
        // console.log('data初始化'); // (1) 对象 (2) 函数

        let data = vm.$options.data;
        data = vm._data = typeof data === 'function' ? data.call(vm) : data;
        // data数据进行劫持
        observer(data);
    }

    // data {} (1) 对象 (2) 数组

    function initMixin(Vue) {
        Vue.prototype._init = function(options) {
            // console.log(options);
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
