<?php

echo "<pre>";
print_r($_FILES);

$_FILES['img']['name']=$_POST['name'];
$tmp = $_FILES['img']['tmp_name'];

//move_uploaded_file($tmp,'/',$name);
echo "<br>";
echo "<pre>";
print_r($_FILES);












