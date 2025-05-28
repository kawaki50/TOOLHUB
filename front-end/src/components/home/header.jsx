import React from 'react';

const Home = () => {
    return (
        <section id="home">
        <div className="home_page ">
            <div className="home_img ">
                <img src="https://www.digitalmarketing-conference.com/wp-content/uploads/2016/05/tools.jpg" alt="img "/>
            </div>
            <div className="home_txt ">
                <h2>COLLECTION ÉTÉ – BRICOLAGE<br/>Collection 2025</h2>
                <div className="home_label " style={{width: '30%'}}>
                    <p style={{color: 'black'}}>Une marque spécialisée dans les essentiels du bricolage et de l’outillage.
                    Conçus avec soin, nos produits allient qualité professionnelle, durabilité et engagement éthique pour accompagner tous vos projets, du plus simple au plus ambitieux.</p>
                </div>
                <button><a href="#sellers">SHOP NOW</a><i className='bx bx-right-arrow-alt'></i></button>
                <div className="home_social_icons">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-pinterest'></i></a>
                    <a href="#"><i className='bx bxl-instagram'></i></a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Home;
