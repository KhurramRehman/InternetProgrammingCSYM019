var module = {
	"course" : "MSc Computing",
	"moduleCode" : "CSYM019",
	"moduleName" : "Internet Programming",
	"tutor" : {
		"firstName" : "Tom",
		"surName" : "Butler",
		"email": "thomas.butler@northampton.ac.uk"
	}
};
var array = [
	"HELLO", "WORLD", "THIS", "IS", "AN", "ARRAY"
];
var arrayOfObjects = [
	{
		"name": "Internet Programming",
		"code": "CSYM019"
	},
	{
		"name": "Databases Systems",
		"code": "CSYM017"
	}
];
var arrayInsideAnObject = {
	"course" : "MSC Computing",
	"modules" : [
		{
			"name": "Internet Programming",
			"code": "CSYM019"
		},
		{
			"name": "Databases Systems",
			"code": "CSYM017"
		}
	]
};
// alert(module.course);
// alert(module.tutor.surName);
// alert(array[0]);
// alert(array[3]);
// alert(arrayOfObjects[0].name + "\n" + arrayOfObjects[0].code);
// alert(arrayOfObjects[1].name + "\n" + arrayOfObjects[1].code);
alert(arrayInsideAnObject.modules[0].name + "\n" + arrayInsideAnObject.modules[0].code);
alert(arrayInsideAnObject.modules[1].name + "\n" + arrayInsideAnObject.modules[1].code);