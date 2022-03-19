function onClickCircle() {
	alert('Circle cliked!');
}

document.addEventListener('DOMContentLoaded', () => {
	var circle = document.getElementById('circle');
	circle.addEventListener('click', onClickCircle);
});