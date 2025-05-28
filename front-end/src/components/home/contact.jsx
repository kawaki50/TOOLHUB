import React from 'react';

function Contact () {
    return (
        
        <section id="contact">
        <div className="contact container">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13307.442082410924!2d-7.632683361804525!3d33.50500584660862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d9703676fdf%3A0xe4c6c2873d2bd5f4!2sMr.%20Bricolage!5e0!3m2!1sfr!2sma!4v1748384946218!5m2!1sfr!2sma" width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <form action="https://formspree.io/f/xzbowpjq" method="POST">
            <div className="form">
                <div className="form-txt">
                    <h4 style={{textAlign: 'start'}}>INFORMATION</h4>
                    <h1 style={{textAlign: 'start'}}>Contact Us</h1>
                    <p style={{textAlign: 'start'}}>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                        attention.</p>
                    <h3 style={{textAlign: 'start'}}>MOROCCO</h3>
                    <p style={{textAlign: 'start'}}>Halhal<br/>+212 661 23 45 67</p>
                    <h3 style={{textAlign: 'start'}}>Casablanca</h3>
                    <p style={{textAlign: 'start'}}>HW95+C9C, Lorem ipsum dolor sit.<br/>411014</p>
                </div>
                <div className="form-details">
                    <input type="text" name="name" id="name" placeholder="Name" required/>
                    <input type="email" name="email" id="email" placeholder="Email" required/>
                    <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required/>
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </form>
    </div>
    </section>
    );
};

export default Contact;
