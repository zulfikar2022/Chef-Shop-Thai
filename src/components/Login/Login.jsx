/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

  const {loginUser,setUser,user} = useContext(AuthContext);

  const handleUserLogin = (event) => {
      event.preventDefault();
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
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        {/* This is section is for error message showing */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

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
      </Form>
    </Container>
  );
};

export default Login;
