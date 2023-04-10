import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='vh-100 bg'>
      <div className="h-100 center dim">
        <Container fluid className='text-white'>
          <Row className='my-2'>
            <h1 className='fw-bold h1 text-center'>Welcome To <span className="text-warning display-4 f-percifico">Witwater</span></h1>
          </Row>
          <Row>
            <Col xs={ 12 }>
              <h2 className="text-center text-uppercase fw-bold  ter">get the best models.</h2>
              <h2 className="text-center text-uppercase fw-bold  ter">Right here, right now.</h2>
            </Col>
            <Col xs={ 8 } md={6} className='mx-auto text-center my-1'>
              <Link to='client' className='btn w-100 btn-outline-warning'>
                Register as client
              </Link>
            </Col>
            <Col xs={ 8 } md={6} className='mx-auto text-center my-1'>
              <Link to='model' className='btn w-100 btn-outline-warning'>
                Register as Model
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Hero;
