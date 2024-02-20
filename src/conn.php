<?php
$db_server='localhost';
$db_user='root';
$db_password="";
$db_name="bravery";
$conn="";
try{
    $conn=mysqli_connect($db_server,$db_user,$db_password,$db_name);
}
catch(mysqli_sql_exception $esp){
    echo"cant";
}

?>