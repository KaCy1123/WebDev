window.addEventListener("load",init)

function init(){
	document.getElementById("btnsubmit").addEventListener("click", search)
}

function search(){
	qry = document.getElementById("cmbsearch").value
	switch(qry){
		case "1+1":
			document.getElementById("lbloutput").innerText = "1+1 = 2"
			break;
		
		case "Tbilisi":
			document.getElementById("lbloutput").innerText = "The capital of Georgia is Tbilisi"
			break;
		
		case "romans":
			document.getElementById("lbloutput").innerText = "The Colosseum is located in Rome, Italy"
			break;
		
		case "exponent":
			document.getElementById("lbloutput").innerText = "9^9 = 387420489"
			break;
			
		default:
			document.getElementById("lbloutput").innerText = ""
			break;
	}
}