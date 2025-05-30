<?php
// Autoriser les requêtes CORS
header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// Gérer la requête OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once("../config/db.php");

// Récupérer les données JSON envoyées par React
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    // Vérifier si toutes les données requises sont présentes
    if (
        isset($data['nom']) && !empty($data['nom']) &&
        isset($data['email']) && !empty($data['email']) &&
        isset($data['mot_de_passe']) && !empty($data['mot_de_passe'])
    ) {

        try {
            // Nettoyer les données
            $nom = htmlspecialchars($data['nom']);
            $email = htmlspecialchars($data['email']);
            $mot_de_passe = password_hash($data['mot_de_passe'], PASSWORD_DEFAULT);

            // Préparer et exécuter la requête
            $sql = "INSERT INTO utilisateurs(nom, email, mot_de_passe) VALUES(:nom, :email, :mot_de_passe)";
            $query = $conn->prepare($sql);
            $query->execute(array(
                ':nom' => $nom,
                ':email' => $email,
                ':mot_de_passe' => $mot_de_passe
            ));

            // Réponse de succès
            http_response_code(201);
            echo json_encode(array(
                "success" => true,
                "message" => "Inscription réussie"
            ));
        } catch (PDOException $e) {
            // Gérer les erreurs de base de données
            if ($e->getCode() == 23000) { // Code d'erreur pour doublon
                http_response_code(400);
                echo json_encode(array(
                    "success" => false,
                    "message" => "Cet email est déjà utilisé"
                ));
            } else {
                http_response_code(500);
                echo json_encode(array(
                    "success" => false,
                    "message" => "Erreur lors de l'inscription"
                ));
            }
        }
    } else {
        // Données manquantes
        http_response_code(400);
        echo json_encode(array(
            "success" => false,
            "message" => "Tous les champs sont requis"
        ));
    }
} else {
    // Aucune donnée reçue
    http_response_code(400);
    echo json_encode(array(
        "success" => false,
        "message" => "Aucune donnée reçue"
    ));
}
