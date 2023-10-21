<?php
$view = 0;

$view_file = "views.txt";
if (file_exists($view_file))
{
    $view = (int)file_get_contents($view_file);
}

$view++;

file_put_contents($view_file, $view);
?>