<?php
require_once 'connection.php';
require_once 'validation.php';


$conn = connection();

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ((isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["password"]) && isset($_POST["confirm"])) == false)
{
    echo json_encode(array("status" => "FAIL1"));
    die();
}

$name = $_POST["name"];
$email = $_POST["email"];
$password = $_POST["password"];
$confirm = $_POST["confirm"];

if ((bdValidateEmail($conn, $email) && validateRegisterPassword($password, $confirm)) == false)
{
  echo json_encode(array("status" => "FAIL2"));
  die();
}

$password = encrypt($password);

$sql_insert = "INSERT INTO users(name, email, passwords) VALUES('$name', '$email', '$password');";
if ($conn->query($sql_insert) === TRUE)
{
  echo json_encode(array("status" => "SUCCESS"));
}
else {
  echo json_encode(array("status" => "FAIL3"));
}

$conn->close();

?>