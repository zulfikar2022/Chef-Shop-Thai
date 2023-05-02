/* eslint-disable no-unused-vars */
import React from 'react';
import './MainLayout.css';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <Container className='mt-3'> 
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
        </Container>
    );
};

export default MainLayout;