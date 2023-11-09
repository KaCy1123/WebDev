window.addEventListener("load",addListeners); //Allows for specific events to occur on the web page
											  //for example, clicking and outputting messages.
function addListeners()
{	//Allows the HTML button that was created to have a clicking action to output statements.
	document.getElementById("msgbtn").addEventListener("click",fullname);
}

function fullname()
{
	var firstname,lastname
	
	firstname = document.getElementById("ftname").value;
	lastname = document.getElementById("ltname").value;
	
	document.getElementById("secondpart").innerHTML = "I would like to meet <span>" + 
	firstname + " " + lastname + ".";
}