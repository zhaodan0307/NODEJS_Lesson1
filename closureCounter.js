// use a closure as wrapper so the var only gets created once in a memory
function closureFunction(){
    let counter = 0;

    // use a second var and assign to a child function
    //里面的内嵌函数，然后导致外面那个counter只需要运行一次，后面运行的counter都已经存在了，所以不用看外面的那个,这种情况因为有closure，所以
    //这个 variable 在用完了之后，没有release
    //closures are just functions with preserved data
    let increment = () => {
        //tell javascript to remember the variables inside the functions
        counter++;
        console.log(counter);
    }
    //由于return的是 increment，调用这个inner function，而inner function是有
    return increment;

}

//assign a var to the closure function but it doesn't execute right away ，必须需要，因为有return值，不然的没法运行
let countMe = closureFunction();
//execute the function twice
countMe();
countMe()