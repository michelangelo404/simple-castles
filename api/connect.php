<?php
$servername = "localhost:3306";
$user = "root";
$pass = "toor";
$database = "castlevania";

$username = $_POST["fusername"];
$password = $_POST["fpassword"];

// Create connection
$conn = new mysqli($servername, $user, $pass, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo nl2br("Connected successfully\n");
// Esegui query
$conn->query("insert into utente (username, passw) values ('$username','$password');");
if(!$conn)
{
    echo mysqli_error($conn);
    header(':', true, 404);
    die();
}
else
{
    echo nl2br("Query succesfully executed!");
    header(':', true, 200);
} 

?> 


