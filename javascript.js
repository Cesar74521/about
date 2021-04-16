var secciones = document.getElementsByTagName("section");
var space = new Array(secciones.length);
for (let i = 0; i < secciones.length - 1; i++) {
	space[i] = document.createElement("br");
	secciones[i].appendChild(space[i]);
}

var line = document.createElement("div");
line.style.height = "2.5px";
line.style.width = "80%";
line.style.backgroundImage = "linear-gradient(90deg, rgba(0,0,0,0), white, rgba(0,0,0,0))";
line.style.margin = 'auto';
for (let i = 0; i < secciones.length - 1; i++) {
	secciones[i].appendChild(line.cloneNode());
}
/*
try {
	document.getElementById("Languages").getElementsByTagName("h1")[0].getElementsByTagName("button")[0].onclick = function() {
		let video = document.getElementById("Languages").getElementsByClassName("video")[0];
		video.classList.add("visible");
	}

	document.getElementById("Languages").getElementsByTagName("div")[0].getElementsByTagName("button")[0].onclick = function() {
		let video = document.getElementById("Languages").getElementsByClassName("video")[0];
		video.classList.remove("visible");
	}

	document.getElementById("food").getElementsByTagName("h1")[0].getElementsByTagName("button")[0].onclick = function() {
		let video = document.getElementById("food").getElementsByClassName("video")[0];
		video.classList.add("visible");
		console.log(video.classList);
	}

	document.getElementById("food").getElementsByTagName("div")[0].getElementsByTagName("button")[0].onclick = function() {
		let video = document.getElementById("food").getElementsByClassName("video")[0];
		video.classList.remove("visible");
		console.log(video.classList);
	}
}
catch (error) {}*/

function show(id) {
	for (let i = 0; i <= 10; i++) {
		try {
			hide(i);
		}
		catch(error) {}
	}

	let video = document.getElementById(id).getElementsByClassName("video")[0];
	video.classList.add("visible");
}

function hide(id) {
	let video = document.getElementById(id).getElementsByClassName("video")[0];
	video.classList.remove("visible");
	video.getElementsByTagName("video")[0].pause();
}