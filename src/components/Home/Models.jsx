import React from 'react'
import { Carousel } from 'react-bootstrap';
import img3 from '../../assets/faceAfrica/img3.jpeg';
import img4 from '../../assets/faceAfrica/img4.jpeg';
import img5 from '../../assets/faceAfrica/img5.jpeg';
import img6 from '../../assets/faceAfrica/img6.jpeg';
import img7 from '../../assets/faceAfrica/img7.jpeg'
import img8 from '../../assets/faceAfrica/img8.jpeg'
import img9 from '../../assets/faceAfrica/img9.jpeg'
import img10 from '../../assets/faceAfrica/img10.jpeg'
import img11 from '../../assets/faceAfrica/img11.jpeg'
import img12 from '../../assets/faceAfrica/img12.jpeg'
import img13 from '../../assets/faceAfrica/img13.jpeg'




const Models = () =>
{
  const faces = [img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13]
  return (
    <div className=' bg-dark text-white py-3'>
      <p className="text-capitalize display-4 fw-bold text-center mt-3">
        <span className="f-percifico text-warning">witwater</span> face of africa
      </p>
      <hr className="mx-auto w-25 border border-2" />
      <div className="p-5">
        <Carousel className='w-25 mx-auto'>
          { faces.map( face => (
            <Carousel.Item >
              <img
                className=" w-100"
                src={face}
                alt="face of africa"
              />
              
            </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Models
