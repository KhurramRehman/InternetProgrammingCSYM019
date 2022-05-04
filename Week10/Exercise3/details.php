<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Details Form</title>
</head>
<body>
	<form action="details.php" method="POST">
		<label for="fname" >First Name:</label>
		<input type="text" name="fname" id="fname"><br>

		<label for="sname">SurName:</label>
		<input type="text" name="sname" id="sname"><br>

		<label for="email">Email:</label>
		<input type="text" name="email" id="email"><br>

		<label for="favColor">Favorite Color:</label>
		<select name="favColor">
			<option value="red">Red</option>
			<option value="blue">Blue</option>
			<option value="green">Green</option>
			<option value="yellow">Yellow</option>			
		</select><br>

		<label for="address">Address</label>
		<textarea id="address" name="address" rows="4" cols="50"></textarea><br>

		<label for="tnc">Do you accept terms and conditions? </label>
		<input type="checkbox" name="tnc" id="tnc"><br>

		<input type="submit" name="submit" value="Submit">

	</form>

	<?php 
		$firstName = $_POST['fname'];
		$surName = $_POST['sname'];
		$email = $_POST['email'];
		$favColor = $_POST['favColor'];
		$address = $_POST['address'];

		if($firstName) {
			echo '<p><b>First Name: </b>'. $firstName.'</p>';
		}
		if($surName) {
			echo '<p><b>SurName: </b>'. $surName.'</p>';
		}
		if($email) {
			echo '<p><b>Your Email: </b>'. $email.'</p>';
		}
		if($favColor) {
			echo '<p><b>Your facorite color: </b>'. $favColor.'</p>';
		}
		if($address) {
			echo '<p><b>Your address: </b>'. $address.'</p>';
		}
	 ?>
</body>
</html>