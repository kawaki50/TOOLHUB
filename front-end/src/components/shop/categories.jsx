import React, { useState, useEffect } from "react";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost/TOOLHUB/back-end/api/nbrCtegory.php');
            const data = await response.json();
            if (data.records) {
                setCategories(data.records);
            }
            setLoading(false);
        } catch (err) {
            setError(`Erreur lors du chargement des catégories: ${err.message}`);
            setLoading(false);
        }
    };

    if (loading) return <div>Chargement des catégories...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="col-lg-12">
            <div className="mb-3">
                <h4>Categories</h4>
                <ul className="list-unstyled fruite-categorie">
                    {categories.map((category) => (
                        <li key={category.id_categories}>
                            <div className="d-flex justify-content-between fruite-name">
                                <a href="#"><i className="fas fa-apple-alt me-2"></i>{category.categorie}</a>
                                <span>({category.nombre_produits || 0})</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Categories;