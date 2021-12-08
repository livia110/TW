<?php

function validatePassword($password)
{
    if (empty($password) || (strlen($password) < 6)) {
        return false;
    }
    return true;
}

function validateEmail($email)
{
    if (empty($email)) {
        return false;
    } else {
        $email = trim($email);
        $email = stripslashes($email);
        $email = htmlspecialchars($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }
    }
    return true;
}

function validateRegisterPassword($password, $confirmation)
{
    validatePassword($password);
    validatePassword($confirmation);
    if ($password  != $confirmation) {
        return false;
    }
    return true;
}

function bdValidateEmail($conn, $email)
{
  if (validateEmail($email) == false)
  {
    return false;
  }
  $result = $conn->query("SELECT email FROM users WHERE email='$email'");
  if ($result->num_rows > 0) {
      return false;
  }
  return true;
}

function encrypt($password)
{
    return md5($password);
}

?>