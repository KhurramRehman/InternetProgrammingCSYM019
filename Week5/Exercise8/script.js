function onKeyDown(event) {
		console.log(event.keyCode);
}

document.addEventListener('DOMContentLoaded', () => {
	var circle = document.getElementById('circle');
	circle.style.opacity = '1';
	document.addEventListener('keydown', onKeyDown);
});