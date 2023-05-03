/* eslint-disable no-unused-vars */
import React from 'react';
import './Reservation.css';

const Reservation = () => {
    return (
        <div className='reservation-container text-white rounded d-flex flex-column  mb-4'>
            <p className=' pt-5 pb-2 your-reservation'>YOUR RESERVATION</p>
            <p className='reservation-text'>We offer Online online reservation system so that you can reserve a sit from  anywhere you are</p>
            <p className=' p-3 text-center make-reservation'>Make a Reservation</p>
        </div>
    );
};

export default Reservation;