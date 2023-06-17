function Vue (options) {
	console.log(options);
    // 初始化
    this._init(options)
    Vue.prototype._init = function(options) {
        console.log(options);
    }
}
// export const a = 100
// export default {a : 1}
export default Vue