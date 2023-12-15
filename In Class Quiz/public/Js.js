window.addEventListener("load",addListeners);

function addListeners()
{
	document.getElementById("btnInput").disabled = true;
	document.getElementById("inpNum").addEventListener("keypress",output);
	document.getElementById("btnInput").addEventListener("click",output);
}

function output()
{
	var num1 = document.getElementById("inpNum").value;
	var output = num1;
	switch (num1){
		case num1 > 20:	
			document.getElementById("lblOutput").textContent = "";
			alert("error: this is not an integer 6-20");
			break;

		case num1 < 6:
			document.getElementById("lblOutput").textContent = "";
			alert("error: this is not an integer 6-20");
			break;

		case num1 % 1 != 0:
			document.getElementById("lblOutput").textContent = "";
			alert("error: this is a decimal");
			break;
			
		default:
			modnum1 = num1%2
			switch (){
				case modnum1 = 0:
					var EvenOdd = "even"
					
			}
			document.getElementById("lblOutput").textContent = output + "" + EvenOdd;
			output = output * 2;
			
			while (output < num1 * 32){			
				document.getElementById("lblOutput").textContent = 
				document.getElementById("lblOutput").textContent + ", " + output + " " + "even";
				output = output * 2;
			}
			break;
	}
}