function createChart(){
	var chart = document.getElementById('myChart');

	const labels = [
		'January', 'February', 'March', 'April', 'May', 'June', 'July',
		'August', 'September', 'October', 'November', 'December'
	];
	const data = {
		labels: labels,
		datasets: [{
			label: 'My first dataset',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: [0, 10, 5, 2, 20, 15, 30, 45, 41, 37, 31, 35]
		}]
	}
	const config = {
		type: 'line',
		data: data,
		options: {}
	};

	const myChart = new Chart(chart, config);
}

document.addEventListener("DOMContentLoaded", createChart);