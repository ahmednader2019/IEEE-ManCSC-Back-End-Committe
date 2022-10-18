<?php
$connection = mysqli_connect('localhost','root','','udemy');

$name = $_POST['name'];
$sql = "DELETE FROM `course` WHERE Name = '$name'";
mysqli_query($connection,$sql);
