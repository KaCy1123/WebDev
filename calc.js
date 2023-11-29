/**
 * 
 */
window.addEventListener("load",initCalc);
window.addEventListener("load",addListener);

function initCalc()
{
	document.getElementById("btnsub").disabled = true;
	document.getElementById("btnadd").disabled = true;
	document.getElementById("btnmult").disabled = true;
	document.getElementById("btndiv").disabled = true;
	document.getElementById("btnequal").disabled = true;
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
	var input;
	input = document.getElementById("btnseven").textContent;
	document.getElementById("lblfullbtns").textContent += input;
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function inputeight()
{
	var input;
	input = document.getElementById("btneight").textContent;
	document.getElementById("lblfullbtns").textContent += input;
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function inputnine()
{
	var input;
	input = document.getElementById("btnnine").textContent;
	document.getElementById("lblfullbtns").textContent += input;
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function opadd()
{
	var input;
	input = document.getElementById("btnadd").textContent;
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = true;
	document.getElementById("btnadd").disabled = true;
	document.getElementById("btnmult").disabled = true;
	document.getElementById("btndiv").disabled = true;
	document.getElementById("btndot").disabled = true;
	document.getElementById("btnequal").disabled = true;
}

function inputfour()
{
	var input;
	input = document.getElementById("btnfour").textContent;
	document.getElementById("lblfullbtns").textContent += input;
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function inputfive()
{
	var input;
	input = document.getElementById("btnfive").textContent;
	document.getElementById("lblfullbtns").textContent += input;
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function inputsix()
{
	var input;
	input = document.getElementById("btnsix").textContent;
	document.getElementById("lblfullbtns").textContent += input;
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function opsub()
{
	var input;
	input = document.getElementById("btnsub").textContent;
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = true;
	document.getElementById("btnadd").disabled = true;
	document.getElementById("btnmult").disabled = true;
	document.getElementById("btndiv").disabled = true;
	document.getElementById("btndot").disabled = true;
	document.getElementById("btnequal").disabled = true;
}

function inputone()
{
	var input;
	input = document.getElementById("btnone").textContent;
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function inputtwo()
{
	var input;
	input = document.getElementById("btntwo").textContent;
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function inputthree()
{
	var input;
	input = document.getElementById("btnthree").textContent;
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function opmult()
{
	var input;
	input = document.getElementById("btnmult").textContent;
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = true;
	document.getElementById("btnadd").disabled = true;
	document.getElementById("btnmult").disabled = true;
	document.getElementById("btndiv").disabled = true;
	document.getElementById("btndot").disabled = true;
	document.getElementById("btnequal").disabled = true;
}

function opsign()
{
	var input;
	input = "*-1"
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function inputzero()
{
	var input;
	input = document.getElementById("btnzero").textContent;
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function inputdot()
{
	var input;
	input = document.getElementById("btndot").textContent;
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = true;
	document.getElementById("btnadd").disabled = true;
	document.getElementById("btnmult").disabled = true;
	document.getElementById("btndiv").disabled = true;
	document.getElementById("btndot").disabled = true;
	document.getElementById("btnequal").disabled = true;
}

function opdiv()
{
	var input;
	input = document.getElementById("btndiv").textContent;
	document.getElementById("lblfullbtns").textContent += input
	document.getElementById("btnsub").disabled = true;
	document.getElementById("btnadd").disabled = true;
	document.getElementById("btnmult").disabled = true;
	document.getElementById("btndiv").disabled = true;
	document.getElementById("btndot").disabled = false;
	document.getElementById("btnequal").disabled = true;
}

function equal()
{
	var output
	output = eval(document.getElementById("lblfullbtns").textContent)
	document.getElementById("lblfullbtns").textContent = output;
	document.getElementById("btnsub").disabled = false;
	document.getElementById("btnadd").disabled = false;
	document.getElementById("btnmult").disabled = false;
	document.getElementById("btndiv").disabled = false;
	document.getElementById("btndot").disabled = false;
	document.getElementById("btnequal").disabled = false;
}

function clear()
{
	var input;
	input = ""
	document.getElementById("lblfullbtns").textContent = input
	document.getElementById("btnsub").disabled = true;
	document.getElementById("btnadd").disabled = true;
	document.getElementById("btnmult").disabled = true;
	document.getElementById("btndiv").disabled = true;
	document.getElementById("btndot").disabled = false;
	document.getElementById("btnequal").disabled = true;
}