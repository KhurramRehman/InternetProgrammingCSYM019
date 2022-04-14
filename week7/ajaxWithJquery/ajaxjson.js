$(document).ready(function() {
	// $.ajax({
	// 	type: "GET",
	// 	url: "counties.json",
	// 	dataType: "json",
	// 	success: function (response) {
	// 		let text = "";
	// 		$.each(response.counties, function (index) {
	// 			text += "<tr><td>"
	// 			+ response.counties[index].name
	// 			+ "</td></tr>";
	// 		  });
	// 		//document.getElementById("countylist").innerHTML(text);
	// 		// $('countylist').append(text);
	// 		$("#countylist").append(text);
	// 	}
	// });

	$.getJSON("counties.json",
		function (response) {
			let text = "";
			$.each(response.counties, function (indexInArray) { 
				text += "<tr><td>"
				+ response.counties[indexInArray].name
				+ "</td></tr>";
			});
			$("#countylist").append(text);
		}
	);
});

// $.ajax({
// 	type: "GET",
// 	url: "counties.json",
// 	data: "data",
// 	dataType: "json",
// 	success: function (response) {
// 		let txt = "";
// 		$.each(response.counties, function (indexInArray, valueOfElement) { 
// 			 txt += "<tr><td>"
// 			 + valueOfElement
// 			 + "</td></tr>";
// 		});
// 		$("#countylist").append(txt);
// 	}
// });