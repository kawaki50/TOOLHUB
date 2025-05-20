<?php
try {
    $conn = new PDO('mysql:host=localhost;dbname=toolhub', 'root', '');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}
