// reference node's filesystem library to read the text files
//有了这个library就可以read or write file
let fs = require('fs')
//read contents of food text file and store in variable called "food"
var food = fs.readFileSync('food.txt','utf8')

//display contents of file
console.log(food)
console.log("We ate this stuff")

//repeat for drinks
var drinks  = fs.readFileSync('drinks.txt','utf8')
console.log(drinks)
console.log("We drank this stuff")