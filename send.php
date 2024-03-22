<?php

$name = "...";
$tel = "...";

if (isset($_POST['name'])) {
  $name = $_POST['name'];
}
if (isset($_POST['phone'])) {
  $tel = $_POST['phone'];
}

$verify = mail("test@bk.ru", "Заявка с сайта", "Имя: " . $name . "\r\n" . "Телефон: " . $tel . "\r\n", "From: test@bk.ru");

header("Location: /");
exit;
