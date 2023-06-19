// 重写数组 
// (1) 获取原来的数组方法

let oldArrayProtoMethods = Array.prototype

// (2) 继承 

let ArrayMethods = Object.create()