import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div id='contact' className='p-5'>
            <h1 className='my-5 text-center'>Let us handle your<br />project, professionally.</h1>
            <Form className='px-0 px-md-5 mx-0 mx-md-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>
                <div className='d-md-flex'>
                    <Form.Group className="mb-3 me-3 w-100" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                        <Form.Control type="number" placeholder="Enter your phone number" />
                    </Form.Group>
                </div>
                <InputGroup>
                    <Form.Control as="textarea" placeholder="Type your message" />
                </InputGroup>
            </Form>
            <div className='d-flex justify-content-center my-5'>
                <button className='custom-btn'>Send</button>
            </div>
        </div>
    );
};

export default Contact;