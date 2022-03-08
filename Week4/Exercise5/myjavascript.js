
	var heading, content, paragraph;

function pageLoadFunction(){
	heading = document.getElementById('heading');
	content = document.getElementById('content');
	paragraph = document.getElementById('paragraph');

	heading.addEventListener('click', onClickHeading);
	content.addEventListener('click', onClickContent);
	paragraph.addEventListener('click', onClickParagraph);

	content.addEventListener('mouseenter', onMouseEnterContent);
	content.addEventListener('mouseleave', onMouseLeaveContent);

	heading.addEventListener('mouseenter', onMouseEnterHeading);
	heading.addEventListener('mouseleave', onMouseLeaveHeading);

	paragraph.addEventListener('mouseenter', onMouseEnterParagraph);
	paragraph.addEventListener('mouseleave', onMouseLeaveParagraph);
}

function onClickHeading() {
	var newValue = heading.firstChild.nodeValue;
	if(newValue.includes(' (heading clicked!)')){
		console.log('Already clicked');
		newValue = newValue.replace(' (heading clicked!)', '');
	}
	else {
		console.log('click message removed');
		newValue += ' (heading clicked!)';
	}
	heading.firstChild.nodeValue = newValue;
}

function onMouseEnterHeading() {
	var newValue = heading.firstChild.nodeValue;
	newValue += ' (mouse entered!)';
	heading.firstChild.nodeValue = newValue;
}

function onMouseLeaveHeading() {
	var newValue = heading.firstChild.nodeValue;
	if(newValue.includes(' (mouse entered!)')) {
		newValue = newValue.replace(' (mouse entered!)', '');
	}
	heading.firstChild.nodeValue = newValue;
}

function onClickContent() {
	var newValue = content.firstChild.nodeValue;
	if(newValue.includes(' (content clicked!)')){
		console.log('Already clicked');
		newValue = newValue.replace(' (content clicked!)', '');
	}
	else {
		console.log('click message removed');
		newValue += ' (content clicked!)';
	}
	content.firstChild.nodeValue = newValue;
}

function onMouseEnterContent() {
	var newValue = content.firstChild.nodeValue;
	newValue += ' (mouse entered!)';
	content.firstChild.nodeValue = newValue;
}

function onMouseLeaveContent() {
	var newValue = content.firstChild.nodeValue;
	if(newValue.includes(' (mouse entered!)')) {
		newValue = newValue.replace(' (mouse entered!)', '');
	}
	content.firstChild.nodeValue = newValue;
}

function onClickParagraph() {
	var newValue = paragraph.firstChild.nodeValue;
	if(newValue.includes(' (paragraph clicked!)')){
		console.log('Already clicked');
		newValue = newValue.replace(' (paragraph clicked!)', '');
	}
	else {
		console.log('click message removed');
		newValue += ' (paragraph clicked!)';
	}
	paragraph.firstChild.nodeValue = newValue;
}

function onMouseEnterParagraph() {
	var newValue = paragraph.firstChild.nodeValue;
	newValue += ' (mouse entered!)';
	paragraph.firstChild.nodeValue = newValue;
}

function onMouseLeaveParagraph() {
	var newValue = paragraph.firstChild.nodeValue;
	if(newValue.includes(' (mouse entered!)')) {
		newValue = newValue.replace(' (mouse entered!)', '');
	}
	paragraph.firstChild.nodeValue = newValue;
}

document.addEventListener('DOMContentLoaded', pageLoadFunction);