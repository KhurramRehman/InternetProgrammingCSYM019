var button;
var inputField;

function onDocumentLoad() {
	button = document.getElementById('button');
	inputField = document.getElementById('input_field');
	button.addEventListener('click', onClickButton);
}

function onClickButton() {
	var inputFieldValue = inputField.value;
	alert(inputFieldValue);
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);