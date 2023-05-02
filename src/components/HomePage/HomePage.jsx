// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomePage.css'
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';


const HomePage = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    
    return (
        <div>
            <Banner></Banner>
            <div className='all-chefs'>
                {chefs.map(chef => <Chef key={chef.id}>{chef}</Chef> )}
            </div>
            <Gallery></Gallery>
        </div>
    );
};

export default HomePage;