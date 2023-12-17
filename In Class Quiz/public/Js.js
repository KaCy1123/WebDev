window.addEventListener("load",addListeners);

function addListeners()
{
	document.getElementById("btnInput").disabled = true;
	document.getElementById("inpNum").addEventListener("keyup",numinp);
	document.getElementById("btnInput").addEventListener("click",output);
}

function numinp()
{
	if (document.getElementById("inpNum").value == "")
	{
		document.getElementById("btnInput").disabled = true;
		document.getElementById("lblOutput").textContent = "";
	}
	else{
		document.getElementById("btnInput").disabled = false;
	}
}

function output()
{
	var num1 = document.getElementById("inpNum").value, 
	output = num1, 
	deciCheck = num1 % 1, 
	modnum1 = num1%2;
	switch (true){  
	/// compares "true" to cases. If a case is true [Such as num1 > 20] it will read as case (true). 
	/// switch(variable) works if i'm checking for a single value instead of comparison.
		case (num1 > 20):	
			document.getElementById("lblOutput").textContent = "error: this is not an integer 6-20";
			break;

		case (num1 < 6):
			document.getElementById("lblOutput").textContent = "error: this is not an integer 6-20";
			break;

		case (deciCheck !== 0):
			document.getElementById("lblOutput").textContent = "error: this is a decimal";
			break;
			
		default:
			modnum1 = output%2;
			switch (modnum1){
				case (modnum1 = 0):
					var EvenOdd = "even";
					break;
				case (modnum1 = 1):
					var EvenOdd = "odd";
					break;
				default:
					var EvenOdd = "error";
					break;
			}
			
			document.getElementById("lblOutput").textContent = output + " " + EvenOdd;
			output = output * 2;
			
			while (output < num1 * 32){
			modnum1 = output%2;
			switch (modnum1){
				case (modnum1 = 0):
					var EvenOdd = "even";
					break;
				case (modnum1 = 1):
					var EvenOdd = "odd";
					break;
				default:
					var EvenOdd = "error";
					break;
			}
				document.getElementById("lblOutput").textContent = 
				document.getElementById("lblOutput").textContent + ", " + output + " " + EvenOdd;
				output = output * 2;
			}
			break;
			}
			
}
