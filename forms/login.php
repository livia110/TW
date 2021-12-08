<?php
require_once 'connection.php';
require_once 'validation.php';


$conn = connection();

if ($conn->connect_error)
{
  die("Connection failed: " . $conn->connect_error);
}


if (isset($_POST["email"]) && isset($_POST["password"]) == false)
{
    echo json_encode(array("status" => "FAIL1"));
    die();
}

$email = $_POST["email"];
$password = $_POST["password"];

if ((validateEmail($email) && validatePassword($password)) == false)
{
  echo json_encode(array("status" => "FAIL2"));
  die();
}

$password = encrypt($password);

$sql_control = "SELECT * FROM users WHERE email='$email' AND passwords='$password'";
$res = $conn->query($sql_control);

if($res->num_rows > 0)
{
  echo json_encode(array("status" => "SUCCESS"));
}
else {
  echo json_encode(array("status" => "FAIL3")); }

$conn->close();

?>