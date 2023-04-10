import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hiring from '../../assets/hiring-icon.svg'
import Model from '../../assets/model.svg'

const Hire = () => {
  return (
    <div className='vh-100 bg-2'>
      <div className='dim h-100'>
        <p className="display-4  ter text-capitalize text-white text-center py-3">
        What will you like to do
        </p>
        <hr className="mx-auto border border-2 w-25" />
      <div className="h-75 d-flex align-items-center">
        
        <Container>
          <Row>
              <Col xs={ 10 } md={ 6 } className='mx-auto text-center my-auto py-2'>
                <div className="col-12">
                  <img src={ Model } className='img-fluid w-25'/>
              </div>
              <Link className='btn btn-outline-warning w-75'>Register as Model</Link>
            </Col>
              <Col xs={ 10 } md={ 6 } className='mx-auto text-center my-auto py-2'>
                <div className="col-12">
                  <img src={ Hiring } className='img-fluid w-25' />
                </div>
              <Link className='btn btn-outline-warning w-75'>Hire a Model</Link>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
  )
}

export default Hire
