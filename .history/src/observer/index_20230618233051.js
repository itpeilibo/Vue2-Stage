export function observer (data) {
    console.log('bbb',data);
    // 1  判断
    if (typeof data != 'object' || data === null) {
        return data
    }
    // 1 对象通过一个类
    return  new Observer (data)
    
}

class Observer {
    constructor (value) {
        this.walk(value) // 遍历
    }
    walk(value) { {msg: 'hello'}
        let keys = Object.keys(value) 
    }
}

// vue Object.defineProperty 缺点 对象中的一个属性 {a:1, b:2}