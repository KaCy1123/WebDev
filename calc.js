/**
 * 
 */
window.addEventListener("load",addListener);

function addListener()
{
	document.getElementById("btnseven").addEventListener("click",inputseven);
	document.getElementById("btneight").addEventListener("click",inputeight);
	document.getElementById("btnnine").addEventListener("click",inputnine);
	document.getElementById("btnfour").addEventListener("click",inputfour);
	document.getElementById("btnfive").addEventListener("click",inputfive);
	document.getElementById("btnsix").addEventListener("click",inputsix);
	document.getElementById("btnone").addEventListener("click",inputone);
	document.getElementById("btntwo").addEventListener("click",inputtwo);
	document.getElementById("btnthree").addEventListener("click",inputthree);
	document.getElementById("btnzero").addEventListener("click",inputzero);
	document.getElementById("btnclear").addEventListener("click",clear);
}
function inputseven()
{
	seven = document.getElementById("btnseven").textContent;
	document.getElementById("lblfullbtns").textContent += seven
}
function inputeight()
{
	eight = document.getElementById("btneight").textContent;
	document.getElementById("lblfullbtns").textContent += eight
}
function inputnine()
{
	nine = document.getElementById("btnnine").textContent;
	document.getElementById("lblfullbtns").textContent += nine
}
function inputfour()
{
	four = document.getElementById("btnfour").textContent;
	document.getElementById("lblfullbtns").textContent += four
}
function inputfive()
{
	five = document.getElementById("btnfive").textContent;
	document.getElementById("lblfullbtns").textContent += five
}
function inputsix()
{
	six = document.getElementById("btnsix").textContent;
	document.getElementById("lblfullbtns").textContent += six
}
function inputone()
{
	one = document.getElementById("btnone").textContent;
	document.getElementById("lblfullbtns").textContent += one
}
function inputtwo()
{
	two = document.getElementById("btntwo").textContent;
	document.getElementById("lblfullbtns").textContent += two
}
function inputthree()
{
	three = document.getElementById("btnthree").textContent;
	document.getElementById("lblfullbtns").textContent += three
}
function inputzero()
{
	zero = document.getElementById("btnzero").textContent;
	document.getElementById("lblfullbtns").textContent += zero
}
function clear()
{
	clear = document.getElementById("btnclear").textContent;
	document.getElementById("lblfullbtns").textContent = ""
}