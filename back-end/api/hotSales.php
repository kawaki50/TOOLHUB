<?php
// Headers requis
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

try {
    // Connexion à la base de données SQLite
    include_once '/Xampp/htdocs/TOOLHUB/back-end/config/db.php';

    // Requête SQL pour récupérer toutes les catégories
    $query = "SELECT * FROM `produits` WHERE prix < 10 LIMIT 4;";
    $stmt = $conn->prepare($query);
    $stmt->execute();

    // Récupérer les résultats
    $produits = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Préparer la réponse
    $response = array(
        "records" => $produits
    );

    // Définir le code de réponse - 200 OK
    http_response_code(200);

    // Afficher les données en JSON
    echo json_encode($response);
} catch (PDOException $e) {
    // Définir le code de réponse - 500 Internal Server Error
    http_response_code(500);

    // Afficher le message d'erreur
    echo json_encode(array(
        "message" => "Erreur lors de la récupération des produits",
        "error" => $e->getMessage()
    ));
}
