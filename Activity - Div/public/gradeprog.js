window.addEventListener("load",InitControls);
window.addEventListener("load",AddListener);

let totalgrade = 0.0;
let countnumgrade = 0;

function AddListener()
{
	document.getElementById("btnsubmit").addEventListener("click",SwitchElements);
	document.getElementById("btngrdsub").addEventListener("click",CalcAverage);
}

function InitControls()
{
	documnet.getElementById("txtnumgrade").focus();
	document.getElementById("entgrade").style.display = "none";
}


