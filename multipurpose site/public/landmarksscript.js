window.addEventListener("load", init);
let q1Input=0;
let q1ROW="";
let q2Input=0;
let q2ROW="";
let q3Input=0;
let q3ROW="";
let q4Input=0;
let q4ROW="";
let score=0
function init(){
	document.getElementById("Q2").style.display = "none";
	document.getElementById("Q3").style.display = "none";
	document.getElementById("Q4").style.display = "none";
	document.getElementById("submit").style.display = "none";
	document.getElementById("btnsubmitQ1").addEventListener("click",checkq1);
	document.getElementById("btnsubmitQ2").addEventListener("click",checkq2);
	document.getElementById("btnsubmitQ3").addEventListener("click",checkq3);
	document.getElementById("btnsubmitQ4").addEventListener("click",checkq4);
	document.getElementById("btnsubmit").addEventListener("click",submit);
}

function checkq1(){
	q1Input=document.getElementById("txtQ1").value;
	switch(q1Input){
		case "New York":
			document.getElementById("Q2").style.display = "block";
			q1ROW="right";
			break;
		case " ":
			document.getElementById("Q2").disabled = true;
			document.getElementById("Q3").disabled = true;
			document.getElementById("Q4").disabled = true;
			q1ROW="wrong";
			break;
		default:
			document.getElementById("Q2").style.display = "block";
			break;
	}
	document.getElementById("btnsubmitQ1").style.display = "none";
	document.getElementById("txtQ1").disabled = true;
}

function checkq2(){
	q2Input=document.getElementById("txtQ2").value;
	switch(q2Input){
		case "Brazil":
			document.getElementById("Q3").style.display = "block";
			q2ROW="right";
			break;
		case " ":
			document.getElementById("Q3").disabled = true;
			document.getElementById("Q4").disabled = true;
			q2ROW="wrong";
			break;
		default:
			document.getElementById("Q3").style.display = "block";
			break;
	}
	document.getElementById("btnsubmitQ2").style.display = "none";
	document.getElementById("txtQ2").disabled = true;
}

function checkq3(){
	q3Input=document.getElementById("txtQ3").value;
	switch(q3Input){
		case "Rome":
			document.getElementById("Q4").style.display = "block";
			q3ROW="right";
			break;
		case " ":
			document.getElementById("Q4").disabled = true;
			q3ROW="wrong";
			break;
		default:
			document.getElementById("Q4").style.display = "block";
			break;
	}
	document.getElementById("btnsubmitQ3").style.display = "none";
	document.getElementById("txtQ3").disabled = true;
}

function checkq4(){
	q4Input=document.getElementById("txtQ4").value;
	switch(q4Input){
		case "Burj Khalifa":
			document.getElementById("btnsubmit").style.display = "block";
			q4ROW="right";
			break;
		case " ":
			document.getElementById("btnsubmit").disabled = true;
			q4ROW="wrong";
			break;
		default:
			document.getElementById("submit").style.display = "block";
			break;
	}
	document.getElementById("btnsubmitQ4").style.display = "none";
	document.getElementById("txtQ4").disabled = true;
}

function submit(){
	if (q1ROW = "right"){
		score = score + 1
	}
	else if (q1ROW = "wrong"){
		score = score
	}
	if (q2ROW = "right"){
		score = score + 1
	}
	else if (q2ROW = "wrong"){
		score = score
	}
	if (q3ROW = "right"){
		score = score + 1
	}
	else if (q3ROW = "wrong"){
		score = score
	}
	if (q4ROW = "right"){
		score = score + 1
	}
	else if (q4ROW = "wrong"){
		score = score
	}
	document.getElementById("btnsubmit").style.display = "none";
	document.getElementById("lblScore").innerText = "Your score is " + score + "/4"
}