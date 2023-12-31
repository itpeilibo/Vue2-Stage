// rollup默认可以导出一个对象 作为打包的配置文件
import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
export default {
  input: './src/index.js', // 打包文件入口
  output: {
    file: 'dist/vue.js', // 出口文件
    format: 'umd', // 打包格式 esm es6模块 commonjs模块 iife自动执行函数 umd (commonjs amd) 在 window 上 Vue  new Vue
    name: 'Vue',
    sourcemap: true
  },
  Plugin: [
    babel ({
      exclude: 'node_modules/**'
    }),
    serve({
      port: 3000,
      contentBase: '', // " " 当前目录
      openPage: 'index.html'
    })
  ]
}
// export default {
//   input: "./src/index.js", // 入口
//   output: {
//     file: "./dist/vue.js", // 出口
//     name: "Vue", // global.vue
//     format: "umd", // esm es6模块 commonjs模块 iife自动执行函数 umd (commonjs amd)
//     sourcemap: true, // 希望可以调试源代码
//   },
//   plugins: [
//     babel({
//       exclude: "node_modules/**",
//     }),
//   ],
// };
