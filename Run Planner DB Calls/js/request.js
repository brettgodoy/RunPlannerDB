$(document).ready(function() {


// document.write("Text");
$("#divOne").hide();

$.ajax({
	type: "GET",
	url: "serverTime.php",
	crossDomain: true
}).done(function (jqXHR) {
	document.write(jqXHR);
});


// document.write(jqXHR.responseText);

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "serverTime.php", false);
// xhr.send();

// document.write(xhr.status);
// document.write(xhr.statusText);


});