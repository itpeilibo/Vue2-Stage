import { initMixin } from "./init";
export const a = 10
function Vue (options) {
	console.log(options);
    // 初始化
    this._init(options)
}
initMixin(Vue)
// export const a = 100
// export default {a : 1}
export default a