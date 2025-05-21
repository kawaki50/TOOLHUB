<?php
// Headers requis
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

try {
    // Connexion à la base de données SQLite
    include_once '/Xampp/htdocs/TOOLHUB/back-end/config/db.php';

    // Requête SQL pour récupérer toutes les catégories
    $query = "SELECT * FROM categories ORDER BY nom";
    $stmt = $conn->prepare($query);
    $stmt->execute();

    // Récupérer les résultats
    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Préparer la réponse
    $response = array(
        "records" => $categories
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
        "message" => "Erreur lors de la récupération des catégories",
        "error" => $e->getMessage()
    ));
}
