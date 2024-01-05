window.addEventListener("load",addListeners);

function addListeners(){
	document.getElementById("btnNameSub").addEventListener("click", Names);
	document.getElementById("btnNumberSub").addEventListener("click", Numbers)
}

function Names(){
	let dataliName = ["Jianzhuo","Sudhir","Mumtaza","Anderson","Hem C. Hand"];
	var liName = document.getElementById("Names");
	
	for (i = dataliName.length-1; i >= 0; --i){
		var li = document.createElement("li");
		li.innerText = dataliName[i];
		liName.appendChild(li);
	}
	document.getElementById("btnNameSub").style.display = "none"
}

function Numbers(){
	let dataliNumbers = ["11","42","77","89","2"];
	var liNumbers = document.getElementById("Numbers");
	
	for (i = dataliNumbers.length-1; i >= 0; --i){
		var li = document.createElement("li");
		li.innerText = dataliNumbers[i];
		liNumbers.appendChild(li);
	}
	document.getElementById("btnNumberSub").style.display = "none"
}