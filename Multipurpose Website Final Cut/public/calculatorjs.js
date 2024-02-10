window.addEventListener("load",init);
display = ""
operator = ""
num1 = 0

function init(){
	document.getElementById("btnclear").addEventListener("click",clear);
	document.getElementById("btnsin").addEventListener("click",sin);
	document.getElementById("btncos").addEventListener("click",cos);
	document.getElementById("btntan").addEventListener("click",tan);
	document.getElementById("btndelete").addEventListener("click",del);
	document.getElementById("btne").addEventListener("click",e);
	document.getElementById("btnsqrt").addEventListener("click",sqrt);
	document.getElementById("btnsquare").addEventListener("click",square);
	document.getElementById("btndivide").addEventListener("click",divide);
	document.getElementById("btnseven").addEventListener("click",seven);
	document.getElementById("btneight").addEventListener("click",eight);
	document.getElementById("btnnine").addEventListener("click",nine);
	document.getElementById("btnexp").addEventListener("click",exp);
	document.getElementById("btntimes").addEventListener("click",multiply);
}

function clear(){
	document.getElementById("txtoutput").value = "";
	display = "";
	operator = "";
	num1 = "";
}

function sin(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	display = Math.sin(display);
	display = String(display);
	document.getElementById("txtoutput").value = display;
}

function cos(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	display = Math.cos(display);
	display = String(display);
	document.getElementById("txtoutput").value = display;
}

function tan(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	display = Math.tan(display);
	display = String(display);
	document.getElementById("txtoutput").value = display;
}

function del(){
	display = document.getElementById("txtoutput").value;
	display = display.slice(0, -1);
	document.getElementById("txtoutput").value = display;
}

function e(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display)
	display = display * Math.E;
	display = String(display) 
	document.getElementById("txtoutput").value = display;
}

function sqrt(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	display = Math.sqrt(display);
	display = String(display);
	document.getElementById("txtoutput").value = display;
}

function square(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	display = display^2;
	display = String(display);
	document.getElementById("txtoutput").value = display;
}

function divide(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	
	if (operator == ""){
		num1 = display;
		operator = "/";
		display = "";
		document.getElementById("txtoutput").value = display;
	}
	else{
		switch(operator){
			case "+":
				display = display + num1;
				document.getElementById("txtoutput").value = display;
				break;

			case "-":
				display = display - num1;
				document.getElementById("txtoutput").value = display;
				break;
				
			case "/":
				display = display / num1;
				document.getElementById("txtoutput").value = display;
				break;
				
			case "*":
				display = display * num1;
				document.getElementById("txtoutput").value = display;
				break;
			
			case "^":
				display = display ^ num1;
				document.getElementById("txtoutput").value = display;
				break;
				
			default:
				num1 = display;
				operator = "^";
				display = "";
				document.getElementById("txtoutput").value = display;
				break;
		}
		operator = ""
		num1 = ""
	}
}


function seven(){
	display = document.getElementById("txtoutput").value;
	display = display;
	display = display + "7";
	document.getElementById("txtoutput").value = display;
}

function eight(){
	display = document.getElementById("txtoutput").value;
	display = display;
	display = display + "8";
	document.getElementById("txtoutput").value = display;
}

function nine(){
	display = document.getElementById("txtoutput").value;
	display = display;
	display = display + "9";
	document.getElementById("txtoutput").value = display;
}

function exp(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	
	if (operator == ""){
		num1 = display;
		operator = "^";
		display = "";
		document.getElementById("txtoutput").value = display;
	}
	else{
		switch(operator){
			case "+":
				display = display + num1;
				document.getElementById("txtoutput").value = display;
				break;

			case "-":
				display = display - num1;
				document.getElementById("txtoutput").value = display;
				break;
				
			case "/":
				display = display / num1;
				document.getElementById("txtoutput").value = display;
				break;
				
			case "*":
				display = display * num1;
				document.getElementById("txtoutput").value = display;
				break;
			
			case "^":
				display = display ^ num1;
				document.getElementById("txtoutput").value = display;
				break;
				
			default:
				num1 = display;
				operator = "^";
				display = "";
				document.getElementById("txtoutput").value = display;
				break;
		}
		operator = ""
		num1 = ""
	}
}

function multiply(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	
	if (operator == ""){
		num1 = display;
		operator = "*";
		display = "";
		document.getElementById("txtoutput").value = display;
	}
	else{
		switch(operator){
			case "+":
				display = display + num1;
				document.getElementById("txtoutput").value = display;
				break;

			case "-":
				display = display - num1;
				document.getElementById("txtoutput").value = display;
				break;
				
			case "/":
				display = display / num1;
				document.getElementById("txtoutput").value = display;
				break;
				
			case "*":
				display = display * num1;
				document.getElementById("txtoutput").value = display;
				break;
			
			case "^":
				display = display ^ num1;
				document.getElementById("txtoutput").value = display;
				break;
				
			default:
				num1 = display;
				operator = "*";
				display = "";
				document.getElementById("txtoutput").value = display;
				break;
		}
		operator = ""
		num1 = ""
	}
}
