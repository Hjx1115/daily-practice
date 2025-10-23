import BigInt from 'json-bigint'
let BigIntStr = BigInt({storeAsString:true})
let BigIntNative = BigInt({useNativeBigInt:true})
let jsonstr=`
    {
        "id":9007199254740993,
        "list":[]
    }
    `// id大于2**53
console.log(BigInt.parse(jsonstr))//转为特殊json-bigint结构
console.log(BigIntStr.parse(jsonstr).id)//转为字符串结构，取里面的id
console.log(BigIntNative.parse(jsonstr))//转为原生BigInt,9007199254740993n