window.addEventListener("load",Initialize)
window.addEventListener("load",addListeners)

function Initialize()
{
	document.getElementById("inpmiddleInit").disabled = true;
	document.getElementById("inplastName").disabled = true;
	document.getElementById("cmbSLC").disabled = true;
	document.getElementById("cmbGrade").disabled = true;
	document.getElementById("inpEmail").disabled = true;
	document.getElementById("inpOSIS").disabled = true;
	document.getElementById("inpCourse1").disabled = true;
	document.getElementById("inpCourse1Grade").disabled = true;
	document.getElementById("inpCourse2").disabled = true;
	document.getElementById("inpCourse2Grade").disabled = true;
	document.getElementById("inpCourse3").disabled = true;
	document.getElementById("inpCourse3Grade").disabled = true;
	document.getElementById("inpCourse4").disabled = true;
	document.getElementById("inpCourse4Grade").disabled = true;
	document.getElementById("inpCourse5").disabled = true;
	document.getElementById("inpCourse5Grade").disabled = true;
	document.getElementById("inpCourse6").disabled = true;
	document.getElementById("inpCourse6Grade").disabled = true;
	document.getElementById("inpCourse7").disabled = true;
	document.getElementById("inpCourse7Grade").disabled = true;
	document.getElementById("inpCourse8").disabled = true;
	document.getElementById("inpCourse8Grade").disabled = true;
	document.getElementById("btnSubmit").disabled = true;
	document.getElementById("btnNextPage").disabled = true;
}

function addListeners()
{
	document.getElementById("inpfirstName").addEventListener("keypress",FNAME);
	document.getElementById("inplastName").addEventListener("keypress",LNAME);
	document.getElementById("cmbSLC").addEventListener("click",SLC);
	document.getElementById("cmbGrade").addEventListener("click",GRADE);
	document.getElementById("inpEmail").addEventListener("keypress",EMAIL);
	document.getElementById("inpOSIS").addEventListener("keypress",OSIS);
	document.getElementById("inpCourse1").addEventListener("keypress",Course1);
	document.getElementById("inpCourse1Grade").addEventListener("keypress",Course1Grade);
	document.getElementById("inpCourse2").addEventListener("keypress",Course2);
	document.getElementById("inpCourse2Grade").addEventListener("keypress",Course2Grade);
	document.getElementById("inpCourse3").addEventListener("keypress",Course3);
	document.getElementById("inpCourse3Grade").addEventListener("keypress",Course3Grade);
	document.getElementById("inpCourse4").addEventListener("keypress",Course4);
	document.getElementById("inpCourse4Grade").addEventListener("keypress",Course4Grade);
	document.getElementById("inpCourse5").addEventListener("keypress",Course5);
	document.getElementById("inpCourse5Grade").addEventListener("keypress",Course5Grade);
	document.getElementById("inpCourse6").addEventListener("keypress",Course6);
	document.getElementById("inpCourse6Grade").addEventListener("keypress",Course6Grade);
	document.getElementById("inpCourse7").addEventListener("keypress",Course7);
	document.getElementById("inpCourse7Grade").addEventListener("keypress",Course7Grade);
	document.getElementById("inpCourse8").addEventListener("keypress",Course8);
	document.getElementById("inpCourse8Grade").addEventListener("keypress",Course8Grade);
	document.getElementById("btnSubmit").addEventListener("click",OUTPUT);
}

function FNAME()
{
	document.getElementById("inpmiddleInit").disabled = false;
	document.getElementById("inplastName").disabled = false;
}

function LNAME()
{
	document.getElementById("cmbSLC").disabled = false;
}

function SLC()
{
	document.getElementById("cmbGrade").disabled = false;
}

function GRADE()
{
	document.getElementById("inpEmail").disabled = false;
	}	

function EMAIL()
{
	document.getElementById("inpOSIS").disabled = false;
}

function OSIS()
{
	document.getElementById("inpCourse1").disabled = false;
}

function Course1()
{
	document.getElementById("inpCourse1Grade").disabled = false;
}

function Course1Grade()
{
	document.getElementById("inpCourse2").disabled = false;
}

function Course2()
{
	document.getElementById("inpCourse2Grade").disabled = false;
}

function Course2Grade()
{
	document.getElementById("inpCourse3").disabled = false;
}

function Course3()
{
	document.getElementById("inpCourse3Grade").disabled = false;
}

function Course3Grade()
{
	document.getElementById("inpCourse4").disabled = false;
}

function Course4()
{
	document.getElementById("inpCourse4Grade").disabled = false;
}

function Course4Grade()
{
	document.getElementById("inpCourse5").disabled = false;
}

function Course5()
{
	document.getElementById("inpCourse5Grade").disabled = false;
}

function Course5Grade()
{
	document.getElementById("inpCourse6").disabled = false;
}

function Course6()
{
	document.getElementById("inpCourse6Grade").disabled = false;
}

function Course6Grade()
{
	document.getElementById("inpCourse7").disabled = false;
}

function Course7()
{
	document.getElementById("inpCourse7Grade").disabled = false;
}

function Course7Grade()
{
	document.getElementById("inpCourse8").disabled = false;
}

function Course8()
{
	document.getElementById("inpCourse8Grade").disabled = false;
}

function Course8Grade()
{
	document.getElementById("btnSubmit").disabled = false;
}

function OUTPUT()
{
	document.getElementById("btnNextPage").disabled = false;
	FNAME = document.getElementById("inpfirstName").value;
	MINIT = document.getElementById("inpmiddleInit").value;
	LNAME = document.getElementById("inplastName").value;
	var selectedSLC = document.getElementById("cmbSLC").selectedIndex;
	switch(selectedSLC)
	{
		case 1:
			SLC = "Pre-Med";
			break;
		case 2:
			SLC = "Humanities Honors Academy";
			break;
		case 3:
			SLC = "Performing and Visual Arts";
			break;
		case 4:
			SLC = "Public Service & Law";
			break;
		case 5:
			SLC = "Teachers of Tomorrow";
			break;
		case 6:
			SLC = "Global Citizens";
			break;
		case 7:
			SLC = "Health Sciences & Software Engineering";
			break;
		default:
			SLC = "N/A"; 
			break;
	}
	
	var selectedGrade = document.getElementById("cmbGrade").selectedIndex;
	switch(selectedGrade)
	{
		case 1:
			GRADELVL = "9";
			break;
		case 2:
			GRADELVL = "10";
			break;
		case 3:
			GRADELVL = "11";
			break;
		case 4:
			GRADELVL = "12";
			break;
		default:
			GRADELVL = "N/A";
			break;
	}		
	EMAIL = document.getElementById("inpEmail").value;
	OSIS = document.getElementById("inpOSIS").value;
	Course1 = document.getElementById("inpCourse1").value;
	Course1Grade = document.getElementById("inpCourse1Grade").value;
	Course2 = document.getElementById("inpCourse2").value;
	Course2Grade = document.getElementById("inpCourse2Grade").value;
	Course3 = document.getElementById("inpCourse3").value;
	Course3Grade = document.getElementById("inpCourse3Grade").value;
	Course4 = document.getElementById("inpCourse4").value;
	Course4Grade = document.getElementById("inpCourse4Grade").value;
	Course5 = document.getElementById("inpCourse5").value;
	Course5Grade = document.getElementById("inpCourse5Grade").value;
	Course6 = document.getElementById("inpCourse6").value;
	Course6Grade = document.getElementById("inpCourse6Grade").value;
	Course7 = document.getElementById("inpCourse7").value;
	Course7Grade = document.getElementById("inpCourse7Grade").value;
	Course8 = document.getElementById("inpCourse8").value;
	Course8Grade = document.getElementById("inpCourse8Grade").value;
	Average = parseInt(Course1Grade) + parseInt(Course2Grade) + 
	parseInt(Course3Grade) + parseInt(Course4Grade) + parseInt(Course5Grade) + 
	parseInt(Course6Grade) + parseInt(Course7Grade) + parseInt(Course8Grade); 
	Average = Average/8;
	GPA = Average/100 * 4
	if (GPA >= 3.88){
		LETTER = "A+"
	}
	else if (GPA >= 3.72){
		LETTER = "A"
	}
	else if (GPA >= 3.6){
		LETTER = "A-"
	}
	else if (GPA >= 3.48){
		LETTER = "B+"
	}
	else if (GPA >= 3.32){
		LETTER = "B"
	}
	else if (GPA >= 3.2){
		LETTER = "B-"
	}
	else if (GPA >= 3.08){
		LETTER = "C+"
	}
	else if (GPA >= 2.92){
		LETTER = "C"
	}
	else if (GPA >= 2.8){
		LETTER = "C-"
	}
	else if (GPA >= 2.68){
		LETTER = "D+"
	}
	else if (GPA >= 2.6){
		LETTER = "D"
	}
	else{
		LETTER = "F"
	}
	document.getElementById("lblOutputFNAME").textContent += FNAME;
	document.getElementById("lblOutputMINIT").textContent += MINIT;
	document.getElementById("lblOutputLNAME").textContent += LNAME;
	document.getElementById("lblOutputSLC").textContent += SLC;
	document.getElementById("lblOutputGRADE").textContent = GRADELVL + "th Grade";
	document.getElementById("lblOutputEMAIL").textContent += EMAIL;
	document.getElementById("lblOutputOSIS").textContent += OSIS;
	document.getElementById("lblOutputCourse1").textContent += Course1;
	document.getElementById("lblOutputCourse1Grade").textContent += Course1Grade;
	document.getElementById("lblOutputCourse2").textContent += Course2;
	document.getElementById("lblOutputCourse2Grade").textContent += Course2Grade;
	document.getElementById("lblOutputCourse3").textContent += Course3;
	document.getElementById("lblOutputCourse3Grade").textContent += Course3Grade;
	document.getElementById("lblOutputCourse4").textContent += Course4;
	document.getElementById("lblOutputCourse4Grade").textContent += Course4Grade;
	document.getElementById("lblOutputCourse5").textContent += Course5;
	document.getElementById("lblOutputCourse5Grade").textContent += Course5Grade;
	document.getElementById("lblOutputCourse6").textContent += Course6;
	document.getElementById("lblOutputCourse6Grade").textContent += Course6Grade;
	document.getElementById("lblOutputCourse7").textContent += Course7;
	document.getElementById("lblOutputCourse7Grade").textContent += Course7Grade;
	document.getElementById("lblOutputCourse8").textContent += Course8;
	document.getElementById("lblOutputCourse8Grade").textContent += Course8Grade;
	document.getElementById("lblOutputOverallAverage").textContent += Average;
	document.getElementById("lblOutputGPA").textContent += GPA;
	document.getElementById("lblOutputLetter").textContent += LETTER;
}