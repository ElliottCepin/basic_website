const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submitBtn");

submit.addEventListener("click", function() {
	const un = username.value;
	const pw = password.value;
	username.value = "";
	password.value = "";
	if (un == "" || pw == "") {
		alert("Not enough information - please try again");
	} else {

		fetch("https://elliottcepin.dev/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
				"Accept": "application/json"
			},
			body: new URLSearchParams({
				"username": un,
				"password": pw
			})
		});
	}

});
