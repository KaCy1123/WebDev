window.addEventListener("load",initialize)
let option = "";
let HowMany = 0;
let FoodArray = [];
let ColorArray = [];
let SubjectArray = [];
let count = 0;
let runtimes = 0;

function initialize()
{
	document.getElementById("divFoods").style.display = "none";
	document.getElementById("divColors").style.display = "none";
	document.getElementById("divSubjects").style.display = "none";
	document.getElementById("optDefault").style.display = "none";
	
	document.getElementById("btnDisplayFoods").disabled = true;
	document.getElementById("btnDisplayColors").disabled = true;
	document.getElementById("btnDisplaySubjects").disabled = true;
	document.getElementById("btnSubmitOpt").disabled = true;
	
	document.getElementById("cmbSelectOpt").addEventListener("input",SelectOpt);
	document.getElementById("btnSubmitOpt").addEventListener("click",SubmitOpt);
	
	document.getElementById("btnSubmitFoodsMany").addEventListener("click",SubmitFoodsMany);
	document.getElementById("btnSubmitFoodsInput").addEventListener("click",SubmitFoodsInput);
	document.getElementById("btnDisplayFoods").addEventListener("click",displayFoods);
	
	document.getElementById("btnSubmitColorsMany").addEventListener("click",SubmitColorsMany);
	document.getElementById("btnSubmitColorsInput").addEventListener("click",SubmitColorsInput);
	document.getElementById("btnDisplayColors").addEventListener("click",displayColors);
	
	document.getElementById("btnSubmitSubjectsMany").addEventListener("click",SubmitSubjectsMany);
	document.getElementById("btnSubmitSubjectsInput").addEventListener("click",SubmitSubjectsInput);
	document.getElementById("btnDisplaySubjects").addEventListener("click",displaySubjects);
}

function SelectOpt()
{
	document.getElementById("btnSubmitOpt").disabled = false;
}

function SubmitOpt()
{
	option = document.getElementById("cmbSelectOpt").value;
	switch(option){
		case "Foods":
			document.getElementById("divFoods").style.display = "block";
			document.getElementById("divFoodsInputs").style.display = "none";
			document.getElementById("divSelect").style.display = "none";
			break;
		
		case "Colors":
			document.getElementById("divColors").style.display = "block";
			document.getElementById("divColorsInputs").style.display = "none";
			document.getElementById("divSelect").style.display = "none";
			break;
		
		case "Subjects":
			document.getElementById("divSubjects").style.display = "block";
			document.getElementById("divSubjectsInputs").style.display = "none";
			document.getElementById("divSelect").style.display = "none";
			break;
			
		default:
			alert("error: select a valid option");
			break;
	}
}

function SubmitFoodsMany()
{
	HowMany = document.getElementById("txtFoodsMany").value;
	document.getElementById("divFoodsMany").style.display = "none";
	document.getElementById("divFoodsInputs").style.display = "block";
}

function SubmitFoodsInput()
{
	var Food = ""
	count = count + 1
	Food = document.getElementById("txtFoodsInput").value;
	FoodArray.push(Food);
	document.getElementById("txtFoodsInput").value = "";
	document.getElementById("txtFoodsInput").focus();
	if (count == HowMany){
		document.getElementById("btnSubmitFoodsInput").disabled = true;
		document.getElementById("btnDisplayFoods").disabled = false;
		document.getElementById("txtFoodsInput").disabled = true;
		count = 0;
		HowMany = 0;
	}
}

function displayFoods()
{
	let arraylength = FoodArray.length;
	var displayarray = "";
	for (let i = 0; i <= arraylength - 1; i++)
	{
		if (displayarray == "")
		{
			displayarray = "Foods:" + "<br/>" + "# " + (i+1) + ". " + FoodArray[i] + "<br/>"
		}
		else
		{
			displayarray = displayarray + "# " + (i+1) + ". " + FoodArray[i] + "<br/>"
		}
	}
	document.getElementById("optFoods").disabled = true;
	document.getElementById("lblDispFoods").innerHTML = displayarray;
	runtimes = runtimes + 1
	if (runtimes < 3){ //after 3 runs of the program, the program only displays outputs
		
		document.getElementById("divFoods").style.display = "none";
		document.getElementById("divSelect").style.display = "block";
		document.getElementById("btnSubmitOpt").disabled = true;
	}
	else{
		document.getElementById("divFoods").style.display = "none";
		document.getElementById("divSelect").style.display = "none";
	}
}

function SubmitColorsMany()
{
	HowMany = document.getElementById("txtColorsMany").value;
	document.getElementById("divColorsMany").style.display = "none";
	document.getElementById("divColorsInputs").style.display = "block";
}

function SubmitColorsInput()
{
	var Color = ""
	count = count + 1
	Color = document.getElementById("txtColorsInput").value;
	ColorArray.push(Color);
	document.getElementById("txtColorsInput").value = "";
	document.getElementById("txtColorsInput").focus();
	if (count == HowMany){
		document.getElementById("btnSubmitColorsInput").disabled = true;
		document.getElementById("btnDisplayColors").disabled = false;
		document.getElementById("txtColorsInput").disabled = true;
		count = 0;
		HowMany = 0;
	}
}

function displayColors()
{
	let arraylength = ColorArray.length;
	var displayarray = "";
	for (let i = 0; i <= arraylength - 1; i++)
	{
		if (displayarray == "")
		{
			displayarray = "Colors:" + "<br/>" + "# " + (i+1) + ". " + ColorArray[i] + "<br/>"
		}
		else
		{
			displayarray = displayarray + "# " + (i+1) + ". " + ColorArray[i] + "<br/>"
		}
	}
	document.getElementById("optColors").disabled = true;
	document.getElementById("lblDispColors").innerHTML = displayarray;
	runtimes = runtimes + 1
	if (runtimes < 3){ //after 3 runs of the program, the program only displays outputs
		document.getElementById("divColors").style.display = "none";
		document.getElementById("divSelect").style.display = "block";
		document.getElementById("btnSubmitOpt").disabled = true;
	}
	else{
		document.getElementById("divColors").style.display = "none";
		document.getElementById("divSelect").style.display = "none";
	}
}

function SubmitSubjectsMany()
{
	HowMany = document.getElementById("txtSubjectsMany").value;
	document.getElementById("divSubjectsMany").style.display = "none";
	document.getElementById("divSubjectsInputs").style.display = "block";
}

function SubmitSubjectsInput()
{
	var Subject = ""
	count = count + 1
	Subject = document.getElementById("txtSubjectsInput").value;
	SubjectArray.push(Subject);
	document.getElementById("txtSubjectsInput").value = "";
	document.getElementById("txtSubjectsInput").focus();
	if (count == HowMany){
		document.getElementById("btnSubmitSubjectsInput").disabled = true;
		document.getElementById("btnDisplaySubjects").disabled = false;
		document.getElementById("txtSubjectsInput").disabled = true;
		count = 0;
		HowMany = 0;
	}
}

function displaySubjects()
{
	let arraylength = SubjectArray.length;
	var displayarray = "";
	for (let i = 0; i <= arraylength - 1; i++)
	{
		if (displayarray == "")
		{
			displayarray = "Subjects:" + "<br/>" + "# " + (i+1) + ". " + SubjectArray[i] + "<br/>"
		}
		else
		{
			displayarray = displayarray + "# " + (i+1) + ". " + SubjectArray[i] + "<br/>"
		}
	}
	document.getElementById("optSubjects").disabled = true;
	document.getElementById("lblDispSubjects").innerHTML = displayarray;
	runtimes = runtimes + 1
	if (runtimes < 3){ //after 3 runs of the program, the program only displays outputs
		document.getElementById("divSubjects").style.display = "none";
		document.getElementById("divSelect").style.display = "block";
		document.getElementById("btnSubmitOpt").disabled = true;
	}
	else{
		document.getElementById("divSubjects").style.display = "none";
		document.getElementById("divSelect").style.display = "none";
	}
	
}