window.addEventListener("load", start);
var UNAME = "";
var PWORD = "";
var StoredUNAME = "";
var StoredPWORD = "";

function start()
{
	document.getElementById("btnNextPage").disabled = true;
	document.getElementById("btnSignup").addEventListener("click", Signup);
	document.getElementById("btnLogin").addEventListener("click", Login);
}

function Signup()
{
	UNAME = document.getElementById("txtUsername").value;
	PWORD = document.getElementById("txtPassword").value;
	localStorage.setItem("Username", UNAME);
	localStorage.setItem("Password", PWORD);
}

function Login()
{
	let StoredUNAME = localStorage.getItem("Username");
	let StoredPWORD = localStorage.getItem("Password");
	UNAME = document.getElementById("txtUsername").value;
	PWORD = document.getElementById("txtPassword").value;
	if (UNAME !== StoredUNAME || PWORD !== StoredPWORD){
		document.getElementById("lblErrorMsg").innerText = "Error";
		alert("error")
	}
	else {
		document.getElementById("lblErrorMsg").innerText = "Successfully logged in. Proceed to next page.";
		document.getElementById("btnNextPage").disabled = false;
	}
}