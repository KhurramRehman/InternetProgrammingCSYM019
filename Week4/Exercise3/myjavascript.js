function pageLoadFunction(){
	var pageContent = document.getElementById('content');
	pageContent.firstChild.nodeValue = 'New Page Content';
	var paragraph = document.getElementById('paragraph');
	paragraph.firstChild.nodeValue = 'This is a new paragpraph';
}

document.addEventListener('DOMContentLoaded', pageLoadFunction);