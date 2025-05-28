import React from 'react';
import '../assets/css/style.css';
import Header from '../components/home/header';
import Nav from '../components/home/nav';
import Collection from '../components/home/collection';
import TopSale from '../components/home/topSale';
import NewArrivals from '../components/home/NewArrivals';
import HotSales from '../components/home/HotSales';
import Contact from '../components/home/contact';
import Footer from '../components/home/footer';
const HomePage = () => {
    return (
        <>
        <Nav />
        <Header />
        <Collection />
        <TopSale />
        <NewArrivals />
        <HotSales />
        <Contact />
        <Footer />
        </>
    );
};

export default HomePage;
