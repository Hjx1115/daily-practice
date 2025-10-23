
// const obj=require("./1.js")
// console.log(obj)

//终端 npm init,在生成的json里增加一个属性"type":"module"
//(默认为"type":"commonjs")
//或者文件后缀改为mjs
//可使nodejs支持es6（不可混用）
import obj from "./2.mjs"
console.log(obj)