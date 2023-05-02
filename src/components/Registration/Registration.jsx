/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Registration = () => {
    const [accepted,setAccepted] = useState(false);
    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }
  return (
    <Container className="w-50 mt-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
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
          <Form.Control type="text" name="photo" placeholder="Photo url" />
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
            label={
              <>
                Accepts Terms and Conditions
              </>
            }
          />
        </Form.Group>
        {/*this section is for success or failure message  */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button disabled={!accepted} variant="dark" className="w-100" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
