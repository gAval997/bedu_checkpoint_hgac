const links =  document.querySelectorAll("a");
links.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		alert("Default prevented!");
	});
});

const jumbotron_button = () => {
	alert("You have presse the button inside the jumbotron");
};

const button_info = () => {
	alert("You've pressed the information button!");
};

const button_success = () => {
	alert("You've pressed the success button!");
};

const button_warning = () => {
	alert("You've pressed the warning button!");
};

const button_danger = () => {
	alert("You've pressed the danger button!");
};
