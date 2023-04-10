import React from 'react'
import { Card, Col, Container, Row, CardImg } from 'react-bootstrap';
import img1 from '../../assets/D702F65F-22CC-4671-944E-F656301F4667.jpeg.png'
import img2 from '../../assets/DSC_1955.JPG.png'
import img3 from '../../assets/FaceApp_1668954628433.jpg.png'
import img4 from '../../assets/image_5.jpg'
import img5 from '../../assets/IMG-20221113-WA0037.jpg.png'
import img6 from '../../assets/Screenshot_20220614-174046_2.png.png'
import img7 from '../../assets/image_6.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ModelWrapper = styled.div`
.min-screen{
  min-height: 100vh;
}
.card{
  border-color: transparent;
  transition: all 1s linear;
}
&:hover{
  .card{
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(225,225,225,0.3);
    cursor: pointer;
  }
}
.img-container{
  position: relative;
  overflow: hidden;
  height: 75vh;
}
.card-img{
  transition: all 1s linear;
  height: 100%;
  max-width: 100%;
}
.img-container:hover .card-img{
  transform: scale(1.2);
}
.card-text{
  position: absolute;
  bottom: 0;
  top: 100;
  width: 100%;
  font-family: impact;
  font-size: 1.4rem;
  transform: translate(0,100%);
}

.img-container:hover .card-text{
  transform: translate(0,0);
  transition: all 1s linear;
}
`

const ModelSample = () =>
{
  const model = [
    {
      img: img1,
      name: 'blessing',
    },
    {
      img: img2,
      name: 'blessing',
    },
    {
      img: img5,
      name: 'blessing',
    }
    ,
    {
      img: img4,
      name: 'blessing',
    },
    {
      img: img3,
      name: 'blessing',
    },
    {
      img: img6,
      name: 'blessing',
    },
    {
      img: img7,
      name: 'blessing',
    }
  ]
  return (
    <ModelWrapper className='min-screen bg-2 '>
      <div className="dim center h-100">
        <Container fluid className='py-4'>
          <p className="display-4 text-center mx-auto text-capitalize text-white  ter mt-3">
            Our models
          </p>
          <hr className="mx-auto w-25 opacity-1 text-white border border-2" />
          <Row className='g-2'>
            { model.map( item => (
              <Col xs={ 6 } md={4} lg={3} className='my-auto py-2'>
                <Card>
                  <div className='img-container h-100' >
                    <CardImg className='card-img img-fluid'  src={ item.img } variant='top' />
                    <Card.Title className='text-center card-text text-uppercase rounded border-2 border-warning border text-white'>
                        {item.name}
                    </Card.Title>
                  </div>
                </Card>
              </Col>
            ) ) }
            <Col xs={ 6 } md={ 4 } lg={ 3 } className='my-auto text-center'>
              <Link className='fs-2 btn btn-outline-warning w-100'>
                View More models
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </ModelWrapper>
    
  )
}

export default ModelSample
