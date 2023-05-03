/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

  const {loginUser,setUser,user,loginWithGoogle,loginWithGithub} = useContext(AuthContext);
  const [error ,setError ] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location ',location);
  const from = location.state?.from?.pathname || '/' ;

  const handleUserLogin = (event) => {
      event.preventDefault();
      setError('');
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password);

      loginUser(email,password)
        .then(result => {
          const loggedUser = result.user;
          setUser(loggedUser);
          console.log('This is a use of context api ',loggedUser);
          form.reset();
          navigate(from,{replace:true})
          setError('');
        })
        .catch(error => {
          console.log(error);
          setError(error.message);
        })

  }
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result.user);
        setUser(result.user);
        navigate(from)
        
      })
      .catch(error => {
        console.log(error);
      })
  }
  const handleLoginWithGithub = () => {
    loginWithGithub()
      .then(result => {
        console.log(result.user);
        console.log(result.user);
        setUser(result.user);
        navigate(from)
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <Container className="w-50 mt-3">
      <Form onSubmit={handleUserLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        {/* This is section is for error message showing */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {error && <p className="text-danger fw-bold">{error}</p>}
        </Form.Group>

        <Button variant="dark" className="w-100 fw-semibold" type="submit">
          Login
        </Button>
        <p className="mt-2">
          New to this site?{" "}
          <Link
            to="/register"
            className="text-danger text-decoration-underline"
          >
            Please Register
          </Link>{" "}
        </p>
        <button onClick={handleLoginWithGoogle} className="btn btn-outline-primary w-100 mb-2"> <FaGoogle/> Login with google</button>
        <button onClick={handleLoginWithGithub} className="btn btn-outline-dark w-100 mb-2"><FaGithub/> Login with github</button>
      </Form>
    </Container>
  );
};

export default Login;
