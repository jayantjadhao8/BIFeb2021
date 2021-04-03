function iseven(x){
    if(x%2==0){
        console.log("It's Even")
    }else{
        console.log("It's odd")
    }
}
function printarr(arr){
    console.log(arr)
}
module.exports.iseven=iseven
module.exports.printarr=printarr