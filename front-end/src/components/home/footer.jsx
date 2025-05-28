import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-container container">
                <div className="content_1" >
                <img src="../src/assets/img/LOGO2.png" alt="Logo" style={{ width: '180px', height: 'fit-content',boxShadow: '0px 0px 0px 0px'}}/>
                    <p>The customer is at the heart of our<br/>unique business model, which includes<br/>design.</p>
                </div>
                <div className="content_2">
                    <h4>SHOPPING</h4>
                    <a href="#sellers">Clothing Store</a>
                    <a href="#sellers">Trending Shoes</a>
                    <a href="#sellers">Accessories</a>
                    <a href="#sellers">Sale</a>
                </div>
                <div className="content_3">
                    <h4>SHOPPING</h4>
                    <a href="./contact.html">Contact Us</a>
                    <a href="https://payment-method-sb.netlify.app/" target="_blank">Payment Method</a>
                    <a href="https://delivery-status-sb.netlify.app/" target="_blank">Delivery</a>
                    <a href="https://codepen.io/sandeshbodake/full/Jexxrv" target="_blank">Return and Exchange</a>
                </div>
                <div className="content_4">
                    <h4>NEWLETTER</h4>
                    <p>Be the first to know about new<br/>arrivals, look books, sales & promos!</p>
                    <div className="f-mail">
                        <input type="email" placeholder="Your Email"/>
                        <i className='bx bx-envelope'></i>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className="f-design">
                <div className="f-design-txt container">
                    <p>Design and Code by kawaki</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

