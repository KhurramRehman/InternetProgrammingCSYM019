<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Double Calculator</title>
</head>
<body>
	<form action="double.php" method="GET">
		<input type="text" name="value">
		<input type="submit" value="Submit">
	</form>

	<?php 
		if(isset($_GET['value'])) {
			$value = $_GET['value'];
			echo '<p>The double of <b>'. $value .'</b> is <b>'. $value * 2 .'</b></p>';
		}
	 ?>
</body>
</html>