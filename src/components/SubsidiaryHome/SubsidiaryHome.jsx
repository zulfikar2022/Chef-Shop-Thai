/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import { Outlet } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';

const SubsidiaryHome = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Gallery></Gallery>
        </div>
    );
};

export default SubsidiaryHome;