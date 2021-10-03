import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthProvider';
import { Link, useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
  //  var location = require ('location-href')
    let history = useHistory();
    const redirect= () => {
        history.push('/register')
    }

    function handleSubmit(e) {
        e.preventDefault();

        login(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <Container className="d-flex align-items-center" style={{ height: '100vh' }}>
            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder ="your email"ref={emailRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder = "your password" ref={passwordRef} required />
                </Form.Group>
                <Button type="submit" className="me-2" variant="light" >Login</Button>
                <Button onClick = {redirect} variant="dark">Register</Button>
               
            </Form>
        </Container >
    );

}
