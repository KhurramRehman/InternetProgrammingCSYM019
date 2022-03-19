function onClickCircle() {
	setInterval(() => {
		var circle = document.getElementById('circle');
		var circleOpacity = parseFloat(circle.style.opacity);
		circle.style.opacity = circleOpacity - 0.01;
	}, 100);
}

document.addEventListener('DOMContentLoaded', () => {
	var circle = document.getElementById('circle');
	circle.style.opacity = '1';
	circle.addEventListener('click', onClickCircle);
});