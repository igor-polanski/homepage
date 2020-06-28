{
	const welcome = () => {
		console.log("Hello developers, I'm glad to see you here. Can't wait to start programming!");
	}
	
	const toggleTheme = () => {
		const body = document.querySelector("body");
		const themeChange = document.querySelector(".js-themeChange");
		const container = document.querySelector(".container")

		container.classList.toggle("container--themeChange");
		body.classList.toggle("body--themeChange");
		if (themeChange.innerText === "Dark theme") {
			themeChange.innerText = "Light theme";
		} else {
			themeChange.innerText = "Dark theme";
		}
	};
	
	const init = () => {
		const themeChange = document.querySelector(".js-themeChange");
		themeChange.addEventListener("click", toggleTheme);
		welcome();
	};
	
	init();
}