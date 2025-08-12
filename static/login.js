const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submitBtn");

submit.addEventListener("click", function() {
	const un = username.value;
	const pw = password.value;
	if (un == "" || pw == "") {
		alert("Not enough information - please try again");
	} else {
		username.value = "";
		password.value = "";
	}

});
