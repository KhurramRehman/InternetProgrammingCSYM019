function onKeyDown() {
		var circle = document.getElementById('circle');
		var circlePositionLeft = circle.offsetLeft;
		circle.style.left = circlePositionLeft - 10 + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
	var circle = document.getElementById('circle');
	circle.style.opacity = '1';
	document.addEventListener('keydown', onKeyDown);
});