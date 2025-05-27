import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Collection from '../components/collection';
import TopSale from '../components/topSale';
import NewArrivals from '../components/newArrivals';
import HotSales from '../components/hotSales';
const HomePage = () => {
    return (
        <>
        <Nav />
        <Header />
        <Collection />
        <TopSale />
        <NewArrivals />
        <HotSales />
        </>
    );
};

export default HomePage;
