<?php

$connection = mysqli_connect('localhost','root','','udemy');
$name = $_POST['name'];
$duration = $_POST['duration'];
$start = $_POST['start'];
$end = $_POST['end'];
$userID = $_POST['userID'];
$sql = "INSERT INTO `course`( `Name`, `Duration`, `Start`, `End`,`User_ID`) VALUES ('$name',$duration,$start,$end,$userID)";
mysqli_query($connection,$sql);









