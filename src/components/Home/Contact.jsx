import React from 'react'
import { Container, Form,  Row, Col,  FormControl, FloatingLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='bg-3 vh-100 text-white'>
      <div className="dim h-100">
        <p className="text-center display-4  ter text-capitalize pt-4">
        contact <span className="text-warning display-3 f-percifico">witwater </span>
      </p>
      <hr className="w-25 mx-auto border border-2" />
      <div className="h-75 center">
        <Container fluid>
        <Row>
          <Col xs={ 10 } md={ 8 } className='mx-auto myy-auto py-4'>
            <Form className='text-dark'>
              <Row className='g-4'>
                <Col xs={6}>
                  <FloatingLabel controlId='floatingInputGrid' label="Surname">
                    <FormControl placeholder='Enter your surname' type='text' />
                  </FloatingLabel>
                </Col>
                <Col xs={6}>
                  <FloatingLabel controlId='floatingInputGrid' label="Firstname">
                    <FormControl placeholder='Enter your surname' type='text' />
                  </FloatingLabel>
                </Col>
                <Col xs={6}>
                  <FloatingLabel controlId='floatingInputGrid' label="Phone Number">
                    <FormControl placeholder='Enter your phone number' type='tel' />
                  </FloatingLabel>
                </Col>
                <Col xs={6}>
                  <FloatingLabel controlId='floatingInputGrid' label="Email">
                    <FormControl placeholder='Enter your email address' type='email' />
                  </FloatingLabel>
                </Col>
                <Col xs={ 12 }>
                  <FloatingLabel controlId='floatingInputGrid' label="Your Message">
                    <FormControl placeholder='Enter your message' type='text' as='textarea' cols={ 8 } />
                  </FloatingLabel>
                </Col>
                  <Col xs={ 12 } className='text-end'>
                    <Button variant='warning' className='text-white text-capitalize'>send your message</Button>
                </Col>
                </Row>
            </Form>
          </Col>
          <Col xs={ 10 } md={ 4 } className='my-auto mx-auto py-2'>
            <p className="text-capitalize h3">phone: <span className="text-warning">+2349015230294</span></p>
            <p className="text-capitalize h3">email: <span className="text-warning text-lowercase">example@email.com</span></p>
            <p className="text-capitalize h3">website: <Link className="text-warning text-lowercase link">localhost:5173</Link></p>
          </Col>
        </Row>
      </Container>
      </div>
      </div>
    </div>
  )
}

export default Contact
