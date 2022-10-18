<?php

$name = [
         [
         'name'=>'ahmed',
         'age'=> 22 , 
         'address'=> 'cairo'
         ],
         [
         'name'=>'khaled',
         'age'=> 15 , 
         'address'=> 'cairo'
         ],
         [
          'name'=>'tarek',
          'age'=> 19 , 
          'address'=> 'cairo'
         ]
        ];
   for($i = 0 ; $i < count($name) ; $i++)
   {
      foreach($name[$i] as $key => $value )
      {
         echo $key . " " . $value . "<br>";
      }
       echo "<hr>";
   }














