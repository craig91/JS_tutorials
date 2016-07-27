function test (o){
	var i = o;
	if(typeof o == "object"){
		var j = o;
		for(var k=o; k < 10; k++)
			console.log(k);
	  }
      console.log(k);
  }
  console.log(j);

}


// Function scope: Variables are visible within the function
// in which they are defined and within any functions that are
// nested within that function.

// variables i, j, and k are declared in different spots,
// but all have the same scope-all three are defined throughout 
// the body of the function.