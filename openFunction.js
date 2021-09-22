let message='hello from global'
//create a parent or "Wrapper" function that contains a variable
function parent(){
    let message='Hello from parent'
    function child(){
        //let message='Hello from child'
        console.log(message)
    }
    // execute the child function
    child()
}

// execute the function
parent()