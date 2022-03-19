function onClickCircle() {
	var circle = document.getElementById('circle');
	circle.style.backgroundColor = 'blue';
}

document.addEventListener('DOMContentLoaded', () => {
	var circle = document.getElementById('circle');
	circle.addEventListener('click', onClickCircle);
});