var scope = "global"
function f(){
	console.log(scope);  //prints undefined
	var scope = "local"; // initialized here but defined everywhere
    console.log(scope); // prints "local"
}




// Function scope means that all variables declared within a function
// are visible throughout the body of the function. This means
// that variables are even visible before they are even delcared.
// In JS this is known as hoisting. JS code behaves as if all variable 
// declarations in a function (but not any associated assignments)
// are "hoisted" to the top of the function. 