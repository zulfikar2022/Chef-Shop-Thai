// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomePage.css'
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';
import Reservation from '../Reservation/Reservation';


const HomePage = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-center bg-dark text-white rounded p-3'>Our Chefs</h1>
            <div className='all-chefs mb-5'>
                {chefs.map(chef => <Chef key={chef.id}>{chef}</Chef> )}
            </div>
            <Gallery></Gallery>
            <Reservation></Reservation>
        </div>
    );
};

export default HomePage;