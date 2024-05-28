import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';

const LastSection = () => {
 

  return (

    
<div className="">

<div className="story d-flex justify-content-center align-items-center mb-4">
          <button className='py-4 '>Testimonials</button>
        </div>
        <h1 className='d-flex justify-content-center py-5 text-center'>What our customers say</h1>
        <p className='text-center text-secondary p-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

    <div className=" col-12 col-md-4 komentler d-flex ms-2 ">
<img src="/assets/images/koment1.svg" alt="" />
<img src="/assets/images/koment2.svg" alt="" />
<img src="/assets/images/koment3.svg" alt="" />
    </div>
    <div className=" col-12 col-md-4 komentler d-flex ms-2">
<img src="/assets/images/koment4.svg" alt="" />
<img src="/assets/images/koment5.svg" alt="" />
<img src="/assets/images/koment6.svg" alt="" />
    </div>

    <div className="question d-flex">
      <div className="question-left m-5">
      <h1 className='d-flex  ms-1 text-center ' >Frequently asked questions</h1>
        <p className=' text-secondary ms-1'>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
        <button  className="btn-second btn-outline text-white mb-2 mb-sm-0" type="submit">Contact us</button>
      </div>
      <div className="question-right p-3 pb-5 ">
         <h6 className=' m-3'>Are the fragrances in your products natural and safe? <img src="/assets/images/logos/plus.svg" alt="" /></h6>
         <h6 className='m-3'>Are Beautico products vegan? <img src="/assets/images/logos/plus.svg" alt="" /></h6>
         <h6 className=' m-3'>What are the expiry dates for Beautico products?<img src="/assets/images/logos/plus.svg" alt="" /></h6>
         <h6 className='m-3'>Is your packaging environmentally friendly?<img src="/assets/images/logos/plus.svg" alt="" /></h6>
         <h6 className=' m-3'>Does Beautico products give me an allergic reaction?<img src="/assets/images/logos/plus.svg" alt="" /></h6>

  </div>

 
    </div>
    <div className="karusel-k  mt-5  ">

    <Swiper
        slidesPerView={5}
        spaceBetween={30}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
      
        className="mySwiper"
      >
       
        <SwiperSlide>
        <img className='w-100' src="./assets/images/karusel/karusel2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-100' src="./assets/images/karusel/karusel3.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-100' src="./assets/images/karusel/karusel4.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
              <img className='w-100' src="./assets/images/karusel/karusel5.svg" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img className='w-100' src="./assets/images/karusel/karusel5.svg" alt="" />

        </SwiperSlide>

        <SwiperSlide>
        <img className='w-100' src="./assets/images/karusel/karusel2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-100' src="./assets/images/karusel/karusel3.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-100' src="./assets/images/karusel/karusel4.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
              <img className='w-100' src="./assets/images/karusel/karusel5.svg" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img className='w-100' src="./assets/images/karusel/karusel5.svg" alt="" />

        </SwiperSlide>
    
      </Swiper>
    
   
   
  
    
    <img src="./assets/images/karusel/karusel6.svg" alt="" />
  </div>
    </div>
  )
}

export default LastSection

