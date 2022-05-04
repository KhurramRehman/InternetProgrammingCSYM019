<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Multiply Calculator</title>
</head>
<body>
	<form action="multiply.php" method="GET">
		<input type="text" name="num1">
		<input type="text" name="num2">

		<input type="submit" value="Submit">
	</form>

	<?php 
		$num1 = $_GET['num1'];
		$num2 = $_GET['num2'];
		if(isset($num1) && isset($num2)) {
			echo '<p>The product of <b>'.$num1.'x'.$num2.'</b> is: <b>'.$num1*$num2.'</b></p>';
		}
	 ?>
</body>
</html>