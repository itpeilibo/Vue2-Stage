// 重写数组 
// (1) 获取原来的数组方法

let oldArrayProtoMethods = Array.prototype

// (2) 继承 

let ArrayMethods = Object.create(oldArrayProtoMethods)

// 劫持

let methods = [
    'push',
    'pop',
    'unshift',
    'shift',
    'splice'
]

methods.forEach (item => {
    ArrayMethods[item]
})