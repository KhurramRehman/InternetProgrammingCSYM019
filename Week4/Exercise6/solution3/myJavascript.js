var inputField;
var result;

function onDocumentLoad() {
	inputField = document.getElementById('input_field');
	result = document.getElementById('result');
}

function onClickButton() {
	var inputFieldValue = inputField.value;
	result.firstChild.nodeValue = inputFieldValue;
}

document.addEventListener('DOMContentLoaded', onDocumentLoad);