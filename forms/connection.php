<?php

function connection()
{
  $servername = "localhost";
  $username = "root";
  $db = "TW5-6";
  
  return new mysqli($servername, $username, "", $db);
}

?>