import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import {FaGem,FaCamera,FaShoppingBag,FaBullhorn } from 'react-icons/fa'

const Trust = () =>
{
  const items = [
    {
      img: <FaGem className='display-3 my-3' />,
      Text: 'fashion shows'
    },
    {
      img: <FaCamera className='display-3 my-3' />,
      Text: 'coperate events'
    },
    {
      img: <FaBullhorn className='display-3 my-3' />,
      Text: 'commercial photo shoots'
    },
    {
      img: <FaShoppingBag className='display-3 my-3' />,
      Text: 'exhibitions/ trade shows'
    },
  ]
  return (
    <div className='vh-100 bg-dark text-white'>
      <div className="h-25 py-5">
        <p className=" ter display-4 text-capitalize text-center">What we offer</p>
        <hr className="w-25 mx-auto border border-2" />
      </div>
      <div className="center h-75">
        
        <Container fluid>
          <Row>
            { items.map( item => (
              <Col xs={ 6 } md={ 3 } className='text-center my-3'>
                <div className="border border-3 border-warning circle mx-auto text-warning">
                  {item.img}
                </div>
                <p className="h2 text-center text-capitalize  ter">{ item.Text }</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Trust
