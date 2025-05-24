import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Collection from '../components/collection';
import TopSale from '../components/topSale';
const HomePage = () => {
    return (
        <>
        <Nav />
        <Header />
        <Collection />
        <TopSale />
        </>
    );
};

export default HomePage;
