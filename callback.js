//comma operators
//var x =10
//x= x++, x
//x = ++x

//console.log(x)

//function returnNum(x){
//    return [10,20,30,40]
//}

//result=returnNum(1)
//console.log(result)

//call back function

// web-app
//login

var g=10
console.log("Start")
function login(username, password){
    returnData=function(){
        console.log(++g)
        console.log("In Callback Function")
        return "validated"
    }   
    setTimeout(returnData, 5000)
    return ++g
}
var result=login()
++g
console.log(result)
console.log(g)
console.log("End")