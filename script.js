function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

var time = getUrlVars()["time"];
var color = getUrlVars()["color"];
const timer = document.getElementById("timer");
const getWork = document.getElementById("getWork");

updateTime = () =>{
	if (time <= 0){
		clearInterval(startTimer);
	}
	let hours = Math.floor(time/3600);
	let minutes = Math.floor((time - hours * 3600)/60);
	let seconds = (time - hours * 3600)%60;
	hours = hours > 9 ? hours : "0" + hours;
	minutes = minutes > 9 ? minutes : "0" + minutes;
	seconds = seconds > 9 ? seconds : "0" + seconds;
	timer.innerText = `${hours}:${minutes}:${seconds}`;
	time--;
}

let startTimer = setInterval(updateTime, 1000);
document.body.style.color = color;
switch (color) {
	case "tomato":
		getWork.innerText = "Время работать";
		break;
	case "green":
		getWork.innerText = "Время отдыхать";
		break;
	default:
		getWork.innerText = "Конец времен. Видимо.";
		break;
}
