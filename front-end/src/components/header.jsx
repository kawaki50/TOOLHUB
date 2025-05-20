import React from 'react';

const Home = () => {
    return (
        <section id="home">
        <div className="home_page ">
            <div className="home_img ">
                <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img "/>
            </div>
            <div className="home_txt ">
                <p className="collection">SUMMER COLLECTION</p>
                <h2>FALL - WINTER<br/>Collection 2023</h2>
                <div className="home_label ">
                    <p>A specialist label creating luxury essentials. Ethically crafted<br/>with an unwavering commitment to exceptional quality.</p>
                </div>
                <button><a href="#sellers">SHOP NOW</a><i className='bx bx-right-arrow-alt'></i></button>
                <div className="home_social_icons">
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-pinterest'></i></a>
                    <a href="#"><i class='bx bxl-instagram'></i></a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Home;
