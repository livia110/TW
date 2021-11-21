<?php
$name = $_POST["name"];
$email = $_POST["email"];

$msg = "Hello $name! Now you are subscribed at Story with your email : $email";
$msg = wordwrap($msg,70);
mail($email, "Welcome!", $msg);
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
    .name{width: 50%;}
    .pass, .conf{width:50%;}


    </style>
  </head>

  <body>

    <h1 style="text-align: center;">Subscription Form Input</h1>

    <?php
    echo"
      <table>
        <tr>
          <th class=\"pass\">Name</th>
          <th class=\"email\">Email</th>
        </tr>
        <table>
          <tr>
            <td class=\"email\">$name</th>
            <td class=\"pass\">$email</th>
          </tr>
      </table>";
      ?>

  </body>
</html>