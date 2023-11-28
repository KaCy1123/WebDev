/**
 * 
 */
window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnseven").addEventListener("click",inputseven);
	document.getElementById("btneight").addEventListener("click",inputeight);
	document.getElementById("btnnine").addEventListener("click",inputnine);
	document.getElementById("btnadd").addEventListener("click",opadd);
	document.getElementById("btnfour").addEventListener("click",inputfour);
	document.getElementById("btnfive").addEventListener("click",inputfive);
	document.getElementById("btnsix").addEventListener("click",inputsix);
	document.getElementById("btnsub").addEventListener("click",opsub);
	document.getElementById("btnone").addEventListener("click",inputone);
	document.getElementById("btntwo").addEventListener("click",inputtwo);
	document.getElementById("btnthree").addEventListener("click",inputthree);
	document.getElementById("btnmult").addEventListener("click",opmult);
	document.getElementById("btnsign").addEventListener("click",opsign);
	document.getElementById("btnzero").addEventListener("click",inputzero);
	document.getElementById("btndot").addEventListener("click",inputdot)
	document.getElementById("btndiv").addEventListener("click",opdiv);
	document.getElementById("btnequal").addEventListener("click",equal);
	document.getElementById("btnclear").addEventListener("click",clear);
}
function inputseven()
{
	var input;
	input = document.getElementById("btnseven").textContent;
	document.getElementById("lblfullbtns").textContent += input;
}
function opadd()
{
	alert("hi")
	var input;
	input = document.getElementById("btnadd").textContent;
	document.getElementById("op").textContent = input;
	document.getElementById("input1").textContent = document.getElementById("lblfullbtns").textContent
}