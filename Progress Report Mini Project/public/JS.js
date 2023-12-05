window.addEventListener("load",Initialize)
window.addEventListener("load",addListeners)

function Initialize()
{
	document.getElementById("inpmiddleInit").disabled = true
	document.getElementById("inplastName").disabled = true
	document.getElementById("inpSLC").disabled = true
	document.getElementById("inpgradeLevel").disabled = true
	document.getElementById("inpEmail").disabled = true
	document.getElementById("btnSubmit").disabled = true;
}

function addListeners()
{
	document.getElementById("inpfirstName").addEventListener("keypress",FNAME);
	document.getElementById("inplastName").addEventListener("keypress",LNAME);
	document.getElementById("inpSLC").addEventListener("keypress",SLC);
	document.getElementById("inpgradeLevel").addEventListener("keypress",GRADE);
	document.getElementById("inpEmail").addEventListener("keypress",EMAIL);
	document.getElementById("btnSubmit").addEventListener("click",OUTPUT);
}

function FNAME()
{
	document.getElementById("inpmiddleInit").disabled = false;
	document.getElementById("inplastName").disabled = false;
}

function LNAME()
{
	document.getElementById("inpSLC").disabled = false;
}

function SLC()
{
	document.getElementById("inpgradeLevel").disabled = false;
}

function GRADE()
{
	document.getElementById("inpEmail").disabled = false;
}

function EMAIL()
{
	document.getElementById("btnSubmit").disabled = false;
}

function OUTPUT()
{
	
	FNAME = document.getElementById("inpfirstName").value;
	MINIT = document.getElementById("inpmiddleInit").value;
	LNAME = document.getElementById("inplastName").value;
	SLC = document.getElementById("inpSLC").value;
	GRADE = document.getElementById("inpgradeLevel").value;
	EMAIL = document.getElementById("inpEmail").value;
	
	document.getElementById("lblOutputFNAME").textContent = FNAME;
	document.getElementById("lblOutputMINIT").textContent = MINIT;
	document.getElementById("lblOutputLNAME").textContent = LNAME;
	document.getElementById("lblOutputSLC").textContent = SLC;
	document.getElementById("lblOutputGRADE").textContent = GRADE + "th Grade";
	document.getElementById("lblOutputEMAIL").textContent = EMAIL;
}