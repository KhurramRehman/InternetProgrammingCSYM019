<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First PHP</title>
</head>
<body>
    <form action="test.php" method="POST">
        <input type="text" name="input1">
        <input type="text" name="input2">

        <input type="submit" name="submit" value="Submit">
    </form>

    <?php 
        if(isset($_POST['input1'])) {
            echo '<p>You entered <strong>'. $_POST['input1'] .'</strong> into the text box</p>';
        }
        if(isset($_POST['input2'])) {
            echo '<p>You entered <strong>'. $_POST['input2'] .'</strong> into the text box</p>';
        }
     ?>
</body>
</html>