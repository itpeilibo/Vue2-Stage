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
    walk(data) {  // {msg: 'hello'}
        let keys = Object.keys(data)
        for (let i = 0; i < keys,length;i++) {

            // 对象我们的每个属性进行劫持
            let key = keys[i]
            let value = data[key]
            defineReactive(data,key,value)

        } 
    }
}
// 对对象中的属性进行劫持
function defineReactive (data, key, value) {
    console.log('111',data,key,value);
    Object.defineProperty(data,key, {
        get () {
            console.log('获取',data,key,value);
            return value
        },
        set (newValue) {
            if (newValue == value) return
            value = newValue
        }
    })
}

// vue Object.defineProperty 缺点 对象中的一个属性 {a:1, b:2}