import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products1, setProducts1] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6); // Nombre de cards visibles

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost/TOOLHUB/back-end/api/product.php');
                const data = await response.json();
                // Adapte cette ligne selon la structure de ta réponse
                if (data && Array.isArray(data)) {
                    setProducts1(data);
                } else if (data && Array.isArray(data.records)) {
                    setProducts1(data.records);
                } else {
                    setProducts1([]);
                }
            } catch (error) {
                setError('Erreur lors du chargement des produits');
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;
    if (!products1.length) return <div>Aucun produit trouvé.</div>;

    return (
        <div className="col-lg-9">
            <div className="row g-4 justify-content-center">
                {products1.slice(0, visibleCount).map((product) => (
                    <div className="col-md-6 col-lg-6 col-xl-4" key={product.id_produits}>
                        <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                                <img src={`/src/assets/img/Imgs/${product.image}`} className="img-fluid w-100 rounded-top" alt={product.nom} style={{height:'306px'}}/>
                            </div>
                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"style={{ top: '10px', left: '10px' }}>{product.categories_name}</div>
                            <div className="p-4 border border-secondary border-top-0 rounded-bottom" style={{height:'240.59px'}}>
                                <h4 style={{textAlign:'start'}}>{product.nom}</h4>
                                <p style={{textAlign:'start'}}>{product.description}</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold mb-0">${product.prix} / kg</p>
                                    <a
                                        href="#"
                                        className="btn border border-secondary rounded-pill px-3 text-primary"
                                        onClick={() => {
                                            // Récupérer le panier actuel
                                            const cart = JSON.parse(localStorage.getItem('cart')) || [];
                                            // Vérifier si le produit existe déjà
                                            const found = cart.find(item => item.id_produits === product.id_produits);
                                            if (found) {
                                                found.quantity += 1;
                                            } else {
                                                cart.push({ ...product, quantity: 1 });
                                            }
                                            localStorage.setItem('cart', JSON.stringify(cart));
                                            alert('Produit ajouté au panier !');
                                        }}
                                    >
                                        <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCount < products1.length && (
                <div className="text-center mt-4">
                    <button className="btn btn-primary" onClick={handleShowMore}>
                        Voir plus
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;
