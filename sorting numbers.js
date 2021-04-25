/*write a web app that:
	- asks the user to enter 3 numbers (strings and Cancel should be converted to 0).
	- sorts the numbers and displays them in ascending order (i.e. from smallest to largest).
	- examples:
		* user enters 34, 2, 9: result is 2, 9, 34.
		* user enters 4, "string", Cancel: result is 0, 0, 4.
      please use only variables and if statements. do not use loops or array or anything else  */
	  let value1 = Number(prompt('Enter first value')) || 0;

	  let value2 = Number(prompt('Enter second value')) || 0;
	  let value3 = Number(prompt('Enter third value')) || 0;
	  
	  if (value1 <= value2  && value2 <= value3 ) {
	document.getElementById("test").innerHTML = value1 +" , "+ value2 +"  ," + value3;
	 }
	  else if (value2 <= value1  && value1 <= value3) {
		  document.getElementById("test").innerHTML =  value2 + "  ,"+ value1+" ," + value3;
	  
	  }
	  else if (value3 <= value2 && value2 <= value1) {
		document.getElementById("test").innerHTML = value3 + " ," + value2 +"  ," + value1;
	
	}
	else if (value3 <= value1 && value1 <= value2) {
		document.getElementById("test").innerHTML = value3 +"  ," + value1 +" ," + value2;
	
	}
	else if (value2 <= value3 && value3 <= value1) {
		document.getElementById("test").innerHTML = value2 +" ," + value3 +" ,"+ value1;
	 
	}
	else  { 
	 
		  document.getElementById("test").innerHTML = value1 +" ," +  value3 +" ," +  value2;
  
  }
	
 