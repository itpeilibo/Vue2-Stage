export function initState (vm) {
    let opts = vm.$options
    console.log('opts',opts);
    // 判断
    if (opts.props) {
         initProps(vm)
    }
    if (opts.data) {
         initData()
    }
    if (opts.watch) {
         initWatch()
    }
    if (opts.computed) {
         initComputed()
    }
    if (opts.methods) {
         initMethods()
    }
}

function initProps () {}
function initWatch () {}
function initComputed () {}
function initMethods () {}

// vue2 对data初始化
function initData (vm) {
    console.log('data初始化');

}