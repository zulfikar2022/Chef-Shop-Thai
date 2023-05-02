/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import { Outlet } from 'react-router-dom';

const SubsidiaryHome = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <Gallery></Gallery>
        </div>
    );
};

export default SubsidiaryHome;