/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-50 mt-3'>
                <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* This is section is for error message showing */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
         
        </Form.Group>

        <Button variant="dark" className='w-100 fw-semibold' type="submit">
          Login
        </Button>
        <p className='mt-2'>New to this site? <Link to='/register' className='text-danger text-decoration-underline'>Please Register</Link> </p>
      </Form>
        </Container >
    );
};

export default Login;