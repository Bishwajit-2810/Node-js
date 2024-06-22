const { json } = require("express")
var bk=()=>{
const jsonString='{"name": "bk", "age": 30,"city":"Dhaka"}'
const jsonObject=JSON.parse(jsonString)
console.log(jsonObject)
console.log(typeof(jsonObject))
console.log(typeof(jsonString))

const jsonObject1={ name: 'bk', age: 30, city: 'Dhaka' }
const jsonStringified=JSON.stringify(jsonObject)
console.log(jsonObject)
console.log(jsonStringified)
console.log(typeof(jsonObject))
console.log(typeof(jsonStringified))
}
module.exports={
    bk
}