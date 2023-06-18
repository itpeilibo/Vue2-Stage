import { observer } from "./observer";

export function initState (vm) {
    let opts = vm.$options
    console.log('opts',opts);
    // 判断
    if (opts.props) {
         initProps(vm)
    }
    if (opts.data) {
         initData(vm)
    }
    if (opts.watch) {
         initWatch(vm)
    }
    if (opts.computed) {
         initComputed(vm)
    }
    if (opts.methods) {
         initMethods(vm)
    }
}

function initProps () {}
function initWatch () {}
function initComputed () {}
function initMethods () {}

// vue2 对data初始化
function initData (vm)  {
    // console.log('data初始化'); // (1) 对象 (2) 函数

    let data = vm.$options.data
    data = typeof data === 'function' ? data.call(vm) : data
    // data数据进行劫持
    observer(data)
}

// data {} (1) 对象 (2) 数组 