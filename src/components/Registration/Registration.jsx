/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser,auth,setUser,user } = useContext(AuthContext);
  
  const [accepted, setAccepted] = useState(false);
  const [successMessage,setSuccessMessage] = useState('');
  const [failureMessage,setFailureMessage] = useState('');


  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const handleRegistration = (event) => {
    setSuccessMessage('');
    setFailureMessage('');

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photoUrl, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        // console.log(createdUser);
        form.reset();
        updateProfile(auth.currentUser,{
          displayName:name,
          photoURL:photoUrl,
        });
        console.log(createdUser);
        // setUser(createdUser);
        setSuccessMessage('User Successfully Created!!');
        setAccepted(false);
      })
      .catch((error) => {
        console.log(error);
        setFailureMessage(error.message);
      });
  };

  return (
    <Container className="w-50 mt-3">
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            name="name"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
          <Form.Label>Phot URL</Form.Label>
          <Form.Control
            type="text"
            required
            name="photo"
            placeholder="Photo url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={<>Accepts Terms and Conditions</>}
          />
        </Form.Group>
        {/*this section is for success or failure message  */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {successMessage && <p className="text-success fw-semibold">{successMessage}</p>}
          {failureMessage && <p className="text-danger fw-semibold">{failureMessage}</p>}
        </Form.Group>
        <Button
          disabled={!accepted}
          variant="dark"
          className="w-100"
          type="submit"
        >
          Register
        </Button>
        <p className="mt-2">
          Already have an acount?{" "}
          <Link to="/login" className="text-danger text-decoration-underline">
            Please Login
          </Link>
          
        </p>
      </Form>
    </Container>
  );
};

export default Registration;
