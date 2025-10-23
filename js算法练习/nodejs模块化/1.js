function A1(){
    _a1()
    console.log("A1")
}
function _a1(){
    console.log("_a1")
}
function A2(){
    console.log("A2")
}

module.exports={
    A1,
    A2
}
// exports.A1=A1
// exports.A2=A2