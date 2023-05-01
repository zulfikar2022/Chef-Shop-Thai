/* eslint-disable no-unused-vars */
import React from 'react';
import './ErrorPage.css';
import { Button, Container } from 'react-bootstrap';
import errorImage from '../../assets/unhappyFace.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container className='text-center mt-5'>
            <img src={errorImage} alt="" />
            <h2>404- page not found</h2>
            <p className='text-muted fw-bold'>The page you are looking for might have been removed or is temporarily unavailable</p>
           <Button> <Link to={'/'} className='navigate-home'>Go to home page</Link></Button>
        </Container>
    );
};

export default ErrorPage;