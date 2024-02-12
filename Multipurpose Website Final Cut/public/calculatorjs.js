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
	document.getElementById("btnfour").addEventListener("click",four);
	document.getElementById("btnfive").addEventListener("click",five);
	document.getElementById("btnsix").addEventListener("click",six);
	document.getElementById("btndeci").addEventListener("click",percent);
	document.getElementById("btnminus").addEventListener("click",minus);
	document.getElementById("btnone").addEventListener("click",one);
	document.getElementById("btntwo").addEventListener("click",two);
	document.getElementById("btnthree").addEventListener("click",three);
	document.getElementById("btnabs").addEventListener("click",absolute);
	document.getElementById("btnplus").addEventListener("click",add);
	document.getElementById("btnzero").addEventListener("click",zero);
	document.getElementById("btndot").addEventListener("click",dot);
	document.getElementById("btnsign").addEventListener("click",sign);
	document.getElementById("btnequal").addEventListener("click",equal);
}

function clear(){
	document.getElementById("txtoutput").value = "";
	display = "";
	operator = "";
	num1 = "";
}

function sin(){
	display = document.getElementById("txtoutput").value;
	if (display == ""){
		display = "";
	}
	else{
		display = parseFloat(display);
		display = Math.sin(display);
	}
	display = String(display);
	document.getElementById("txtoutput").value = display;
}

function cos(){
	display = document.getElementById("txtoutput").value;
	if (display == ""){
		display = "";
	}
	else{
		display = parseFloat(display);
		display = Math.cos(display);
	}
	display = String(display);
	document.getElementById("txtoutput").value = display;
}

function tan(){
	display = document.getElementById("txtoutput").value;
	if (display == ""){
		display = "";
	}
	else{
		display = parseFloat(display);
		display = Math.tan(display);
	}
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
	if (display == ""){
		display = Math.E;
	}
	else{
		display = parseFloat(display)
		display = display * Math.E;
	}
	display = String(display) 
	document.getElementById("txtoutput").value = display;
}

function sqrt(){
	display = document.getElementById("txtoutput").value;
	if (display == ""){
		display = "";
	}
	else{
		display = parseFloat(display);
		display = Math.sqrt(display);
	}
	display = String(display);
	document.getElementById("txtoutput").value = display;
}

function square(){
	display = document.getElementById("txtoutput").value;
	if (display == ""){
		display = "";
	}
	else{
	display = parseFloat(display);
	display = display**2;
	}
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
				display = num1 + display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;

			case "-":
				display = num1 - display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "/":
				display = num1 / display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "*":
				display = num1 * display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
			
			case "^":
				display = num1 ** display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			default:
				break;
		}
		operator = ""
		num1 = ""
	}
}


function seven(){
	display = document.getElementById("txtoutput").value;
	display = display + "7";
	document.getElementById("txtoutput").value = display;
}

function eight(){
	display = document.getElementById("txtoutput").value;
	display = display + "8";
	document.getElementById("txtoutput").value = display;
}

function nine(){
	display = document.getElementById("txtoutput").value;
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
				display = num1 + display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;

			case "-":
				display = num1 - display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "/":
				display = num1 / display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "*":
				display = num1 * display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
			
			case "^":
				display = num1 ** display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			default:
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
				display = num1 + display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;

			case "-":
				display = num1 - display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "/":
				display = num1 / display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "*":
				display = num1 * display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
			
			case "^":
				display = num1 ** display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			default:
				break;
		}
		operator = ""
		num1 = ""
	}
}

function four(){
	display = document.getElementById("txtoutput").value;
	display = display + "4";
	document.getElementById("txtoutput").value = display;
}

function five(){
	display = document.getElementById("txtoutput").value;
	display = display + "5";
	document.getElementById("txtoutput").value = display;
}

function six(){
	display = document.getElementById("txtoutput").value;
	display = display + "6";
	document.getElementById("txtoutput").value = display;
}

function percent(){
	display = document.getElementById("txtoutput").value;
	if (display == ""){
		display = "";
	}
	else{
		display = parseFloat(display)
		display = display * .01;
	}
	display = String(display) 
	document.getElementById("txtoutput").value = display;
}

function minus(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	
	if (operator == ""){
		num1 = display;
		operator = "-";
		display = "";
		document.getElementById("txtoutput").value = display;
	}
	else{
		switch(operator){
			case "+":
				display = num1 + display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;

			case "-":
				display = num1 - display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "/":
				display = num1 / display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "*":
				display = num1 * display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
			
			case "^":
				display = num1 ** display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			default:
				break;
		}
		operator = ""
		num1 = ""
	}
}

function one(){
	display = document.getElementById("txtoutput").value;
	display = display + "1";
	document.getElementById("txtoutput").value = display;
}

function two(){
	display = document.getElementById("txtoutput").value;
	display = display + "2";
	document.getElementById("txtoutput").value = display;
}

function three(){
	display = document.getElementById("txtoutput").value;
	display = display + "3";
	document.getElementById("txtoutput").value = display;
}

function absolute(){
	display = document.getElementById("txtoutput").value;
	var sign = display.slice(0,1);
	switch(sign){
		case "":
			display = ""
			break;
		
		case "-":
			display = parseFloat(display);
			display = display * -1
			break
		
		default:
			display = display;
			break
	}
	display = String(display) 
	document.getElementById("txtoutput").value = display;
}

function add(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	
	if (operator == ""){
		num1 = display;
		operator = "+";
		display = "";
		document.getElementById("txtoutput").value = display;
	}
	else{
		switch(operator){
			case "+":
				display = num1 + display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;

			case "-":
				display = num1 - display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "/":
				display = num1 / display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "*":
				display = num1 * display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
			
			case "^":
				display = num1 ** display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			default:
				break;
		}
		operator = ""
		num1 = ""
	}
}

function zero(){
	display = document.getElementById("txtoutput").value;
	display = display + "0";
	document.getElementById("txtoutput").value = display;
}

function dot(){
	display = document.getElementById("txtoutput").value;
	display = display + ".";
	document.getElementById("txtoutput").value = display;
}

function sign(){
	display = document.getElementById("txtoutput").value;
	if (display == ""){
		display = "";
	}
	else{
		display = parseFloat(display)
		display = display * -1;
	}
	display = String(display) 
	document.getElementById("txtoutput").value = display;
}

function equal(){
	display = document.getElementById("txtoutput").value;
	display = parseFloat(display);
	
	if (operator == ""){
		display = String(display);
		document.getElementById("txtoutput").value = display;
	}
	else{
		switch(operator){
			case "+":
				display = num1 + display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;

			case "-":
				display = num1 - display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "/":
				display = num1 / display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			case "*":
				display = num1 * display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
			
			case "^":
				display = num1 ** display;
				display = String(display);
				document.getElementById("txtoutput").value = display;
				break;
				
			default:
				break;
		}
		operator = ""
		num1 = ""
	}
}