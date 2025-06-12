import React from 'react';
import '/src/assets/css/bootstrap.min.css';
import Nav from '../components/nav';
import Categories from '../components/shop/categories';
import BannerImg from '../components/shop/bannerImg';
const Store = () => {
    return (
        <>
            <Nav />
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <h1 className="mb-4" style={{marginTop: '50px',textAlign: 'start'}}>Boutique</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4" style={{marginTop: '20px'}}>
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <Categories />
                                        <BannerImg />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="row g-4 justify-content-center">
                                    <div className="col-md-6 col-lg-6 col-xl-4">
                                        <div className="rounded position-relative fruite-item">
                                            <div className="fruite-img">
                                                <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                                            </div>
                                            <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
                                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>Grapes</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                <div className="d-flex justify-content-between flex-lg-wrap">
                                                    <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Store;

