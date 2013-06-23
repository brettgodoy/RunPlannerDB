$(document).ready(function() {


// document.write("Text");
$("#divOne").hide();
$("#questionTwo").hide();
$("#questionThree").hide();
$("#questionFour").hide();
$("#done").hide();



});

var submitCounter = 0;

var submitClicked = function () {
	submitCounter += 1;
	
	if (submitCounter === 1) {
		$("#questionOne").hide();
		$("#questionTwo").show();
	}

	else if (submitCounter === 2 && document.getElementById('yesTwo').checked) {
		$("#questionTwo").hide();
		$("#questionThree").show();
		submitCounter += 5;
	}


	else if (submitCounter === 2) {
		$("#questionTwo").hide();
		$("#questionFour").show();
		
	}

	else if (submitCounter === 3 ) {
		$("#questionFour").hide();
		$("#submitButton").hide();
		$("#done").show();
	}


	else if (submitCounter === 8) {
		$("#questionThree").hide();
		$("#questionFour").show();
	}

	else if (submitCounter === 9) {
		$("#questionFour").hide();
		$("#submitButton").hide();
		$("#done").show();	
	}

	else {
		return;
	}
};






