import React, { useState, useEffect } from 'react';

const HotSales = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost/TOOLHUB/back-end/api/hotSales.php');
                const data = await response.json();
                if (data && data.records) {
                    setProducts(data.records);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section id="sellers">
        <div className="seller container">
            <h2 style={{textAlign: 'start'}}>Hot Sales</h2>
            <br />
            <div className="best-seller">
                {products.map((product) => (
                    <div key={product.id_produits} className="best-p1">
                        <img src={`/src/assets/img/hot-sales/${product.image}`} alt={product.nom} style={{marginBottom: '20px'}}/>
                        <div className="best-p1-txt">
                            <div className="name-of-p">
                                <p style={{textAlign: 'start',fontWeight: 'bold',marginBottom: '10px'}}>{product.nom}</p>
                            </div>
                            <div className="price">
                                ${product.prix}
                            </div>
                            <div className="buy-now" style={{textAlign: 'start', marginTop: '10px'}}>
                                <button onClick={() => window.location.href = `/product/${product.id_produits}`}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default HotSales;
