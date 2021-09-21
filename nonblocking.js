//reference node's filesystem  module to read file
let fs = require('fs')


//read food file asynchronously
//注意这里的default的就是 asynchronously
//callback是在假设path不存在的时候，就会返回后面那个值
//因为
let food = fs.readFile('food.txt','utf8',(err,food)=>{
    console.log(food)

})

console.log("we ate this")

let drinks = fs.readFile('drinks.txt','utf8',(err,drinks)=>{
    console.log(drinks)

})
console.log("we drank this")

//返回值是哪个线运行呢，线运行了ate message-drink message-drinks list-food list ,因为drinks list比food短，所以先完成