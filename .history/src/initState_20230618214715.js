export function initState (vm) {
    let opts = vm.$options
    console.log('opts',opts);
    // 判断
    if (opts.props) {
         initProps()
    }
    if (opts.data) {
         initData()
    }
    if (opts.watch) {
         initWatch()
    }
    if (opts.props) {
         initProps()
    }
}