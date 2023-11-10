window.addEventListener("load",addListeners); //Allows for specific events to occur on the web page
window.addEventListener("load",initelement);

function initelement()
{
	document.getElementById("ftname").focus();
	document.getElementById("ltname").disabled = true;
	document.getElementById("stadd").disabled = true;
	document.getElementById("ctname").disabled = true;
	document.getElementById("statename").disabled = true;
	document.getElementById("zipcode").disabled = true;
	document.getElementById("msgbtn").disabled = true;
		
}	
										  //for example, clicking and outputting messages.
function addListeners()
{	//Allows the HTML button that was created to have a clicking action to output statements.
	document.getElementById("ftname").addEventListener("keypress",elemenable);
	document.getElementById("msgbtn").addEventListener("click",fullname);
}
function elemenable()
{
	firstname = document.getElementById("ftname").value;
	if (firstname!= "")
		{
		document.getElementById("ltname").disabled = false;
		document.getElementById("stadd").disabled = false;
		document.getElementById("ctname").disabled = false;
		document.getElementById("statename").disabled = false;
		document.getElementById("zipcode").disabled = false;
		document.getElementById("msgbtn").disabled = false;			
		}
		else{
			document.getElementById("ltname").disabled = true;
			document.getElementById("stadd").disabled = true;
			document.getElementById("ctname").disabled = true;
			document.getElementById("statename").disabled = true;
			document.getElementById("zipcode").disabled = true;
			document.getElementById("msgbtn").disabled = true;			
		}

}

function fullname()
{
	var firstname,lastname,cityname,statename,zipcode
	
	firstname = document.getElementById("ftname").value;
	lastname = document.getElementById("ltname").value;
	streetaddress = document.getElementById("stadd").value;
	cityname = document.getElementById("ctname").value;
	statename = document.getElementById("statename").value;
	zipcode = document.getElementById("zipcode").value;

	document.getElementById("secondpart").innerHTML = "So you're <span>" + 
	firstname + " " + lastname + ", " + "who lives at " + streetaddress +;
}