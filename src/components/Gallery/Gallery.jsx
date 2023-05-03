/* eslint-disable no-unused-vars */
import React from 'react';
import './Gallery.css';
import photo1 from '../../assets/food1.jpg';
import photo2 from '../../assets/food2.jpg';
import photo3 from '../../assets/food3.jpg';
import photo4 from '../../assets/food4.jpg';
import photo5 from '../../assets/food5.jpg';
import photo6 from '../../assets/food6.jpg';


const Gallery = () => {
    return (
        <div className='mt-3'>
            <h1 className='text-center bg-dark text-white rounded p-3'>Our Gallery</h1>
            <div className='gallery-container'>
                <div>
                    <img src={photo1} />
                </div>
                <div>
                    <img src={photo2} />
                </div>
                <div>
                    <img src={photo3} />
                </div>
                <div>
                    <img src={photo4} />
                </div>
                <div>
                    <img src={photo5} />
                </div>
                <div>
                    <img src={photo6} />
                </div>
            </div>

        </div>
    );
};

export default Gallery;