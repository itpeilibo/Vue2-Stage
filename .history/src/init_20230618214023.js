
export function initMixin(Vue) {
    Vue.prototype._init = function(options) {
        console.log(options);
        let vm = this
        vm.$options = options
    }
}

 