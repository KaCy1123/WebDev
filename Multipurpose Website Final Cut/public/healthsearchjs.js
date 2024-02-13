window.addEventListener("load",init)

function init(){
	document.getElementById("btnsubmit").addEventListener("click", search)
}

function search(){
	qry = document.getElementById("cmbsearch").value
	switch(qry){
		case "flu":
			document.getElementById("lbloutput").innerText = "If you have a flu, you should see your primary care provider or your family pediatrician"
			break;
		
		case "anes":
			document.getElementById("lbloutput").innerText = "Anesthesiologists evaluate, monitor, and supervise patient care before, during, and after surgery."
			break;
		
		case "docs":
			document.getElementById("lbloutput").innerText = "Dermatologist, Endocrinologist, Physician, Gastroenterologist, Gynecologist."
			break;
		
		case "price":
			document.getElementById("lbloutput").innerText = "On average, a visit to the doctor's costs around $150-$350."
			break;
			
		default:
			document.getElementById("lbloutput").innerText = ""
			break;
	}
}