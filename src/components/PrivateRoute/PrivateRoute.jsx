/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return  <Spinner animation="border" variant="dark" />
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;