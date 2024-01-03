<?php 
    if(isset($_GET['name'])) {
        echo "<h1> Hello {$_GET['name']}! </h1>";
    }
?>

<form method = "GET">
    Enter your name : <input type = "input" name = "name">
    <br>
    <input type = submit>
</form>
