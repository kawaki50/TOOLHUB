<?php
// Headers requis


// Inclusion de la base de données et création d'un objet
require_once '/Xampp/htdocs/toolhub/back-end/config/db.php';


// Requête pour récupérer tous les produits
$query = "SELECT * FROM produits ORDER BY id_produits DESC";
$stmt = $conn->prepare($query);
$stmt->execute();

// Vérification s'il y a des résultats
if ($stmt->rowCount() > 0) {
    // Tableau de produits
    $products_arr = array();
    $products_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $product_item = array(
            "id_produits" => $id_produits,
            "nom" => $nom,
            "description" => $description,
            "prix" => $prix,
            "image" => $image,
            "date_ajout" => $date_ajout
        );

        array_push($products_arr["records"], $product_item);
    }

    // Code 200 OK
    http_response_code(200);
    echo json_encode($products_arr);
} else {
    // Code 404 Not found
    http_response_code(404);
    echo json_encode(array("message" => "Aucun produit trouvé."));
}
