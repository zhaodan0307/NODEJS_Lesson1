//avoid global variables
function parent(){
    let message = 'Hello from parent'

    function child(){
        console.log(message)
    }
    return child();
}

//assign a var to represent the parent function ( but not execute it yet)
var childFunction = parent()
childFunction() // now execute the function