<?php 
	$server = 'db';
	$username = 'root';
	$password = 'csym019';

	$schema = 'testdb';
	$pdo = new PDO('mysql:dbname='.$schema.';host='.$server, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

	$statement = $pdo->prepare('select * from Person where sur_name = :name');
	$insertStatement = $pdo->prepare('INSERT INTO Person(first_name, sur_name, dob, email) VALUES(:first_name, :sur_name, :dob, :email)');

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>PHP with SQL</title>
</head>
<body>
	<?php  
		// $results = $pdo->query('select * from Person');
	$values = [
		'name' => 'rehman'
	];
	$insert_values = [
		'first_name' => 'msi',
		'sur_name' => 'laptop',
		'dob' => '2014-05-12',
		'email' => 'msi@gmail.com'
	];
	$statement->execute($values);
	$insertStatement->execute($insert_values);
	foreach ($statement as $row) {
		echo '<p>' . $row['first_name'] . ' ' . $row['sur_name'] . ' was born on ' . $row['dob'] . '</p>';
	}
	?>
</body>
</html>