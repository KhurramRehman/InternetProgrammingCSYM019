var currentRunningInterval;

function onKeyDown(event) {

		if(currentRunningInterval != null){
			clearInterval(currentRunningInterval);
		}
		if(event.keyCode == 37) //left
		{
			currentRunningInterval = setInterval(onKeyDownLeft, 10);
		}
		else if(event.keyCode == 38) // up
		{
			currentRunningInterval = setInterval(onKeyDownUp, 10);
		}
		else if(event.keyCode == 39) //right
		{
			currentRunningInterval = setInterval(onKeyDownRigt, 10);
		}
		else if(event.keyCode == 40) // down
		{
			currentRunningInterval = setInterval(onKeyDownBottom, 10);
		}
}

function onKeyDownLeft() {	
		var circle = document.getElementById('circle');
		var circlePositionLeft = circle.offsetLeft;
		circle.style.left = circlePositionLeft - 1 + 'px';
}

function onKeyDownRigt() {
		var circle = document.getElementById('circle');
		var circlePositionRight = circle.offsetLeft;
		circle.style.left = circlePositionRight + 1 + 'px';
}

function onKeyDownUp() {
		var circle = document.getElementById('circle');
		var circlePositionTop = circle.offsetTop;
		circle.style.top = circlePositionTop - 1 + 'px';
}

function onKeyDownBottom() {
		var circle = document.getElementById('circle');
		var circlePositionBottom = circle.offsetTop;
		circle.style.top = circlePositionBottom + 1 + 'px';
}

document.addEventListener('DOMContentLoaded', () => {

	var circle = document.getElementById('circle');
	circle.style.opacity = '1';

	document.addEventListener('keydown', onKeyDown);
});