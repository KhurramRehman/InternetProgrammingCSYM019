<?php  
	$server = 'db';
	$username = 'root';
	$password = 'csym019';

	$schema = 'testdb';
	$pdo = new PDO('mysql:dbname='.$schema.';host='.$server, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
	$insertStatement = $pdo->prepare('INSERT INTO Person(first_name, sur_name, dob, email) VALUES(:first_name, :sur_name, :dob, :email)');

	if(isset($_POST['submit'])){
		$values = [
			'first_name' => $_POST['firstname'],
			'sur_name' => $_POST['surname'],
			'dob' => $_POST['dob'],
			'email' => $_POST['email']
		];
		$insertStatement->execute($values);
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Add Data</title>
</head>
<body>
	<form action="adddata.php" method="POST">
		<label>First name:</label>
		<input type="text" name="firstname" />
		<label>Surname:</label>
		<input type="text" name="surname" />
		<label>Date of Birth:</label>
		<input type="text" name="dob">
		<label>Email:</label>
		<input type="text" name="email" />
		<input type="submit" name="submit" value=”Submit” />
	</form>
</body>
</html>