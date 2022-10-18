<?php

// session_start();

define('username','ahmednader');
define('password','12345678');

if(isset($_POST['name']))
  {
     if($_POST['name']==username && $_POST['password']==password)
       {
         setcookie('username',$_POST['name'],time()+3600,"/");
         setcookie('password',$_POST['password'],time()+3600,"/");
        //  $_SESSION['username'] = $_POST['name'];
        //  $_SESSION['password'] = $_POST['password'];
         header('LOCATION: home.php');
       }
     else
      header('LOCATION: form.html');
  }
