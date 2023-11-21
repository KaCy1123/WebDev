/**
 * 
 */
window.addEventListener("load",initvar);
function initvar()
{
	var input, numcreate, num1, num2, numfinal, operation;
	
	input = ""; //GET RID OF THIS SHIT STORE IT IN A LABEL FUCKER
	numcreate = "";
	num1 = "";
	num2 = "";
	numfinal = "";
	operation = "";
	addListener()
}
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
	var input, numcreate;
	
	input = document.getElementById("btnseven").textContent;
	numcreate += input;
	alert(numcreate);
	document.getElementById("lblfullbtns").textContent = numcreate;
}
