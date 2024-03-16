<?php

$name = "...";
$nameCompany = "...";
$tel = "...";
$email = "...";
$text = "...";

if (isset($_POST['name'])) {
    $name = $_POST['name'];
}
if (isset($_POST['nameCompany'])) {
    $nameCompany = $_POST['nameCompany'];
}
if (isset($_POST['phone'])) {
    $tel = $_POST['phone'];
}
if (isset($_POST['mail'])) {
    $email = $_POST['email'];
}
if (isset($_POST['text'])) {
    $text = $_POST['text'];
}

$verify = mail("info@indigastudio.ru", "Заявка с сайта", "Имя: " . $name . "\r\n" . "Название компании: " . $nameCompany . "\r\n" . "Телефон: " . $tel . "\r\n" . "Электронная почта: " . $email . "\r\n" . "О задаче: " . $text . "\r\n", "From: indiga@studio.ru");

header("Location: /");
exit;