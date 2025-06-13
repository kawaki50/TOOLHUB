import React, { useEffect, useState } from "react";
import '../../assets/css/bootstrap.min.css';
import Nav from "../nav";
import Footer from "../footer";
function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleQuantityChange = (id, delta) => {
        const updatedCart = cart.map(item => {
            if (item.id_produits === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemove = (id) => {
        const updatedCart = cart.filter(item => item.id_produits !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const total = cart.reduce((sum, item) => sum + item.prix * item.quantity, 0);

    // Génère le message WhatsApp avec le contenu du panier
    const generateWhatsAppMessage = () => {
        if (cart.length === 0) {
            return "Bonjour, je souhaite passer une commande mais mon panier est vide.";
        }
        let message = "Bonjour, je souhaite commander:\n";
        cart.forEach(item => {
            message += `- ${item.nom} (x${item.quantity}) : ${(item.prix * item.quantity).toFixed(2)} $\n`;
        });
        message += `\nTotal: ${total.toFixed(2)} $`;
        return message;
    };

    const whatsappUrl = `https://wa.me/+212641998526?text=${encodeURIComponent(generateWhatsAppMessage())}`;

    return (
        <>
        <Nav />
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Products</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                            {cart.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center">Votre panier est vide.</td>
                                </tr>
                            )}
                            {cart.map(item => (
                                <tr key={item.id_produits}>
                                    <th scope="row">
                                        <div className="d-flex align-items-center">
                                            <img src={`/src/assets/img/Imgs/${item.image}`} className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt={item.nom}/>
                                        </div>
                                    </th>
                                    <td>
                                        <p className="mb-0 mt-4">{item.nom}</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">{item.prix} $</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: 100 }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-minus rounded-circle bg-light border" style={{ width: 30, height: 30 }}
                                                    onClick={() => handleQuantityChange(item.id_produits, -1)}>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm text-center border-0" value={item.quantity} readOnly style={{backgroundColor:'transparent'}}/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-plus rounded-circle bg-light border" style={{ width: 30, height: 30 }}
                                                    onClick={() => handleQuantityChange(item.id_produits, 1)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">{(item.prix * item.quantity).toFixed(2)} $</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-md rounded-circle bg-light border mt-4" style={{ width: 30, height: 30, cursor: 'pointer', display: 'flex', justifyContent: 'center' }}
                                            onClick={() => handleRemove(item.id_produits)}>
                                            <i className="fa fa-times text-danger"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="row g-4 justify-content-end">
                    <div className="col-8"></div>
                    <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                        <div className="bg-light rounded">
                            <div className="p-4">
                                <h1 className="display-6 mb-4">Cart <span className="fw-normal">Total</span></h1>
                                <div className="d-flex justify-content-between mb-4">
                                    <h5 className="mb-0 me-4">total:</h5>
                                    <p className="mb-0">${total.toFixed(2)}</p>
                                </div>
                                
                            </div>
                            
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button" style={{display:'inline-flex',justifyContent:'center',alignItems:'center'}}>
                                    Proceed Checkout
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container text-center mb-4">
            <a href="/store" className="btn btn-secondary rounded-pill px-4 py-2">
                Retourner aux produits
            </a>
        </div>
        <Footer />
        </>
    );
}


export default Cart;