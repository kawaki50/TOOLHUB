<?php
// Autoriser les requêtes CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
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
        isset($data['email']) && !empty($data['email']) &&
        isset($data['mot_de_passe']) && !empty($data['mot_de_passe'])
    ) {
        try {
            // Nettoyer les données
            $email = htmlspecialchars($data['email']);
            $mot_de_passe = $data['mot_de_passe'];

            // Préparer et exécuter la requête
            $sql = "SELECT * FROM utilisateurs WHERE email = :email";
            $query = $conn->prepare($sql);
            $query->execute([':email' => $email]);
            $user = $query->fetch(PDO::FETCH_ASSOC);

            if ($user && password_verify($mot_de_passe, $user['mot_de_passe'])) {
                // Connexion réussie
                session_start();
                $_SESSION['user_id'] = $user['id_utilisateurs'];
                $_SESSION['user_nom'] = $user['nom'];
                $_SESSION['user_email'] = $user['email'];

                http_response_code(200);
                echo json_encode(array(
                    "success" => true,
                    "message" => "Connexion réussie",
                    "user" => array(
                        "id" => $user['id_utilisateurs'],
                        "nom" => $user['nom'],
                        "email" => $user['email']
                    )
                ));
            } else {
                // Identifiants incorrects
                http_response_code(401);
                echo json_encode(array(
                    "success" => false,
                    "message" => "Email ou mot de passe incorrect"
                ));
            }
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(array(
                "success" => false,
                "message" => "Erreur lors de la connexion"
            ));
        }
    } else {
        // Données manquantes
        http_response_code(400);
        echo json_encode(array(
            "success" => false,
            "message" => "Email et mot de passe requis"
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
