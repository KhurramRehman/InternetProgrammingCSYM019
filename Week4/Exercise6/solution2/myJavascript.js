var button;
var inputField;
var result;

function onDocumentLoad() {
	button = document.getElementById('button');
	inputField = document.getElementById('input_field');
	result = document.getElementById('result');
	button.addEventListener('click', onClickButton);
}

function onClickButton() {
	var inputFieldValue = inputField.value;
	result.firstChild.nodeValue = inputFieldValue;
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);