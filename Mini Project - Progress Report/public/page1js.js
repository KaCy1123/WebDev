window.addEventListener("load",start);

function start(){
	document.getElementById("btnNext").disabled = true;
	document.getElementById("txtPeriod8Friday").addEventListener("keypress",enablenext);
}

function enablenext(){
	document.getElementById("btnSubmit").disabled = false;
}
