<?php


$connection = mysqli_connect('localhost','root','','udemy');
$name = $_POST['name'];
$ID = $_POST['ID'];

$sql = "UPDATE `course` SET `Name`='$name' WHERE `ID` = $ID ";
mysqli_query($connection,$sql);

// echo mysqli_affected_rows($connection);








