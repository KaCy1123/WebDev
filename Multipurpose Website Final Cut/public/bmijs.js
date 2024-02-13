window.addEventListener("load", init)
weight = 0;
height = 0;

function init(){
	document.getElementById("height").style.display = "none";
	
	document.getElementById("btnweight").addEventListener("click", weightcal);
	document.getElementById("btnheight").addEventListener("click", heightcal);
}

function weightcal(){
	weight = document.getElementById("txtweight").value;
	if (weight != ""){
		document.getElementById("weight").style.display = "none";
		document.getElementById("height").style.display = "block";
	}
	else{
		document.getElementById("height").style.display = "none";
		document.getElementById("weight").style.display = "block";
	}
}

function heightcal(){
	var bmi = 0
	height = document.getElementById("txtheight").value;
	if (height != ""){
		document.getElementById("height").style.display = "none";
		bmi = height * height
		bmi = weight / bmi
		bmi = 703 * bmi
		document.getElementById("lbloutput").innerText = "Your BMI is " + bmi
	}
	else{
		document.getElementById("weight").style.display = "none";
	}
}