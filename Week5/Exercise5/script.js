function onClickCircle() {
	var circle = document.getElementById('circle');
	var circleOpacity = parseFloat(circle.style.opacity);
	circle.style.opacity = circleOpacity - 0.1;
}

document.addEventListener('DOMContentLoaded', () => {
	var circle = document.getElementById('circle');
	circle.style.opacity = '0.5';
	circle.addEventListener('click', onClickCircle);
});