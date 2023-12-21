window.addEventListener("load", start);
window.addEventListener("load", addListeners);

function start(){
	document.getElementById("txtPeriod1Tuesday").disabled = true;
	document.getElementById("txtPeriod1Wednesday").disabled = true;
	document.getElementById("txtPeriod1Thursday").disabled = true;
	document.getElementById("txtPeriod1Friday").disabled = true;

	document.getElementById("txtPeriod2Monday").disabled = true;
	document.getElementById("txtPeriod2Tuesday").disabled = true;
	document.getElementById("txtPeriod2Wednesday").disabled = true;
	document.getElementById("txtPeriod2Thursday").disabled = true;
	document.getElementById("txtPeriod2Friday").disabled = true;

	document.getElementById("txtPeriod3Monday").disabled = true;
	document.getElementById("txtPeriod3Tuesday").disabled = true;
	document.getElementById("txtPeriod3Wednesday").disabled = true;
	document.getElementById("txtPeriod3Thursday").disabled = true;
	document.getElementById("txtPeriod3Friday").disabled = true;

	document.getElementById("txtPeriod4Monday").disabled = true;
	document.getElementById("txtPeriod4Tuesday").disabled = true;
	document.getElementById("txtPeriod4Wednesday").disabled = true;
	document.getElementById("txtPeriod4Thursday").disabled = true;
	document.getElementById("txtPeriod4Friday").disabled = true;

	document.getElementById("txtPeriod5Monday").disabled = true;
	document.getElementById("txtPeriod5Tuesday").disabled = true;
	document.getElementById("txtPeriod5Wednesday").disabled = true;
	document.getElementById("txtPeriod5Thursday").disabled = true;
	document.getElementById("txtPeriod5Friday").disabled = true;

	document.getElementById("txtPeriod6Monday").disabled = true;
	document.getElementById("txtPeriod6Tuesday").disabled = true;
	document.getElementById("txtPeriod6Wednesday").disabled = true;
	document.getElementById("txtPeriod6Thursday").disabled = true;
	document.getElementById("txtPeriod6Friday").disabled = true;
	
	document.getElementById("txtPeriod7Monday").disabled = true;
	document.getElementById("txtPeriod7Tuesday").disabled = true;
	document.getElementById("txtPeriod7Wednesday").disabled = true;
	document.getElementById("txtPeriod7Thursday").disabled = true;
	document.getElementById("txtPeriod7Friday").disabled = true;

	document.getElementById("txtPeriod8Monday").disabled = true;
	document.getElementById("txtPeriod8Tuesday").disabled = true;
	document.getElementById("txtPeriod8Wednesday").disabled = true;
	document.getElementById("txtPeriod8Thursday").disabled = true;
	document.getElementById("txtPeriod8Friday").disabled = true;
}

function addListeners(){
	
	document.getElementById("txtPeriod1Monday").addEventListener("keyup", Period1Monday)
	document.getElementById("txtPeriod1Tuesday").addEventListener("keyup", Period1Tuesday)
	document.getElementById("txtPeriod1Wednesday").addEventListener("keyup", Period1Wednesday)
	document.getElementById("txtPeriod1Thursday").addEventListener("keyup", Period1Thursday)
	document.getElementById("txtPeriod1Friday").addEventListener("keyup", Period1Friday)

}

function Period1Monday(){
	
}