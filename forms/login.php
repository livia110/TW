<?php
if(empty($_POST["email"]) || empty($_POST["password"])) {
    echo "You should complete all inputs";
    exit;
}

$email = $_POST["email"];
$password = $_POST["password"];
?>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Form Data</title>

    <style>
    body{background-color: #c2c5aa }

    table, th, td {
      border: 3px solid black;
      border-collapse: collapse;
      text-align: center;
      background-color: white;
    }
    table{width: 50%;margin: 0 auto;}
    .name{width: 20%;}
    .email{width: 30%;}
    .pass, .conf{width:25%;}


    </style>
  </head>

  <body>

    <h1 style="text-align: center;">Login Form Input</h1>

    <?php
      echo"
        <table>
          <tr>
            <th class=\"email\">Email</th>
            <th class=\"pass\">Password</th>
          </tr>
          <table>
            <tr>
              <td class=\"email\">$email</th>
              <td class=\"pass\">$password</th>
            </tr>
        </table>"
      ?>

  </body>
</html>