import React from 'react'
import { Carousel } from 'react-bootstrap';

const Home = () => {
 return (
   <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://res.cloudinary.com/dtwpmuiav/image/upload/v1681864052/Screenshot_2023-04-19_at_01-21-52_Printing_Industry_-_Atac_All_-_Hot_Melt_Adhesive_Water-Based_Adhesive_Flexography_Ink_jjuqlh.png"
         alt="First slide"
         height='550px'
       />
       <Carousel.Caption>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://res.cloudinary.com/dtwpmuiav/image/upload/v1681864059/Screenshot_2023-04-19_at_01-20-38_Packaging_Industry_-_Atac_All_-_Hot_Melt_Adhesive_Water-Based_Adhesive_Flexography_Ink_lavebr.png"
         alt="Second slide"
         height='550px'
       />

       <Carousel.Caption>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://res.cloudinary.com/dtwpmuiav/image/upload/v1681864055/Screenshot_2023-04-19_at_01-19-10_Printing_Ink_-_Atac_All_-_Hot_Melt_Adhesive_Water-Based_Adhesive_Flexography_Ink_rutmjw.png"
         alt="Third slide"
         height='550px'
       />

       <Carousel.Caption>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
 )
}

export default Home