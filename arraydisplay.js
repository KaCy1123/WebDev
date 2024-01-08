window.addEventListener("load",addListener);
let countvalue = 0;
let infoarray = [];
var displayval;

function addListener()
{
	document.getElementById("txtinput").focus();
	document.getElementById("btnsubmit").addEventListener("click",InsertArray);
	document.getElementById("btndisplay").addEventListener("click",DisplayArray);
}

function InsertArray()
{
	var inputvalue = "";
	inputvalue = document.getElementById("txtinput").value;
	infoarray.push(inputvalue);
	alert("Element: " + infoarray[countvalue] + " has been added.");
	countvalue = countvalue + 1;
	document.getElementById("txtinput").value = "";
	document.getElementById("txtinput").focus();
}

function DisplayArray()
{
	let arraylen = infoarray.length;
	var disparray = "";

	for (let i = 0; i < arraylen; i++)
	{
		if (disparray == "")
		{
			disparray = "Item #" + (i+1) + ": " + infoarray[i] + "<br/>";
		}
		else
		{
			disparray = disparray + "Item #" + (i+1) + ": " + infoarray[i] + "<br/>";
		}
	}
	
	document.getElementById("dispresult").innerHTML = disparray;
	document.getElementById("txtinput").focus();
}