function onClickCircle() {
	var circle = document.getElementById('circle');
	circle.style.opacity = '1';
	circle.style.backgroundColor = 'blue';
}

document.addEventListener('DOMContentLoaded', () => {
	var circle = document.getElementById('circle');
	circle.style.opacity = '0.5';
	circle.addEventListener('click', onClickCircle);
});