<?php
	$server = 'db';
	$username = 'root';
	$password = 'csym019';

	$schema = 'testdb';
	$pdo = new PDO('mysql:dbname='.$schema.';host='.$server, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
	$insertStatement = $pdo->prepare('INSERT INTO Person(first_name, sur_name, dob, email) VALUES(:first_name, :sur_name, :dob, :email)');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Exercise 1</title>
</head>
<body>
	<form action="ezercise1.php" method="POST">
		<label>Search</label>
		<input type="text" name="search_string">
		<br>
		<label>Search By:</label>
		<select name="param">
			<option value="first_name">First Name</option>
			<option value="sur_name">SurName</option>
			<option value="email">Email</option>
		</select>
		<br>
		<input type="submit" name="submit" value="Search">
	</form>

	<?php
		if(isset($_POST['submit']) && !empty($_POST['search_string'])) {
			$values = [
				'name' => $_POST['search_string']
			];
			
			switch ($_POST['param']) {
				case 'first_name':
					$statement = $pdo->prepare('SELECT * FROM Person WHERE first_name = :name');
					break;
				case 'sur_name':
					$statement = $pdo->prepare('SELECT * FROM Person WHERE sur_name = :name');
					break;
				case 'email':
					$statement = $pdo->prepare('SELECT * FROM Person WHERE email = :name');
					break;
				
				// default:
				// 	$statement = $pdo->query('select * from Person');
				// 	break;
			}

			$statement->execute($values);
			echo 'rows => '.$statement->rowCount();
			foreach ($statement as $row) {
				echo '<ul>'.
						'<li>'.
							$row['first_name'] . ' ' . $row['sur_name'] . ' was born on ' . $row['dob']
						.'</li>'
					.'</ul>';
			}
		}
		else {
			$results = $pdo->query('select * from Person');
			foreach ($results as $row) {
				echo '<p>' . $row['first_name'] . ' ' . $row['sur_name'] . ' was born on ' . $row['dob'] . '</p>';
			}
		}
	?>
</body>
</html>