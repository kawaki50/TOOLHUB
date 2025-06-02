import React from 'react';
import '/src/assets/css/bootstrap.min.css';
import Nav from '../components/nav';
import SortCategory from '../components/shop/sortCategory';
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
                        <SortCategory />
                        <div className="row g-4" style={{marginTop: '20px'}}>
                        <div className="col-lg-3">
                        <div className="row g-4">
                        <Categories />
                        <BannerImg />
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

