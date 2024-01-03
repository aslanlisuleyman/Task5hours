import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import "./styles.css"

import {Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
   

    
    
      <Swiper navigation={true} modules={[Autoplay,Navigation]}   autoplay={{
                    delay: 2500
                    
                }}
    
    className="mySwiper">
        
      <SwiperSlide className='bir'>
       
<div className='head'>
       <div>
       <h1 style={{color:'red',fontSize:'45px',fontFamily:"monospace"}}>BizPro</h1>
       </div>
       <div>
        <ul>
            <Link style={{textDecoration:'none',color:'white',fontSize:"20px"}} to="/">HOME</Link>
            <Link style={{textDecoration:'none',color:'white',fontSize:"20px"}} to="/add">ADD</Link>
            <Link style={{textDecoration:'none',color:'white',fontSize:"20px"}} to="/wishlist">WISHLIST</Link>

        </ul>
       </div>


        </div>


        <div className='mai'  >

             <h1>HELLO WE'RE BIZPRO</h1>
         <p>SUB HEAD,MOTTO OR MISSION SUBTITLE</p>
         <a href="" class="btn44-45 btn-47">
              SEE OUR PROJECTS
          </a>
        </div>
        


      </SwiperSlide>
      <SwiperSlide className='iki'>
             
<div className='head'>
       <div>
       <h1 style={{color:'red',fontSize:'45px',fontFamily:"monospace"}}>BizPro</h1>
       </div>
       <div>
        <ul>
            <Link style={{textDecoration:'none',color:'white',fontSize:"20px"}} to="/">HOME</Link>
            <Link style={{textDecoration:'none',color:'white',fontSize:"20px"}} to="/add">ADD</Link>
            <Link style={{textDecoration:'none',color:'white',fontSize:"20px"}} to="/wishlist">WISHLIST</Link>

        </ul>
       </div>


        </div>


        <div className='mai'  >

             <h1>HELLO WE'RE BIZPRO</h1>
         <p>SUB HEAD,MOTTO OR MISSION SUBTITLE</p>
         <a href="" class="btn44-45 btn-47">
              SEE OUR PROJECTS
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className='uc'>
             
<div className='head'>
       <div>
       <h1 style={{color:'red',fontSize:'45px',fontFamily:"monospace"}}>BizPro</h1>
       </div>
       <div>
        <ul>
            <Link style={{textDecoration:'none',color:'white',fontSize:"20px"}} to="/">HOME</Link>
            <Link style={{textDecoration:'none',color:'white',fontSize:"20px"}} to="/add">ADD</Link>
            <Link style={{textDecoration:'none',color:'white',fontSize:"20px"}} to="/wishlist">WISHLIST</Link>

        </ul>
       </div>


        </div>


        <div className='mai'  >

             <h1>HELLO WE'RE BIZPRO</h1>
         <p>SUB HEAD,MOTTO OR MISSION SUBTITLE</p>
         <a href="" class="btn44-45 btn-47">
              SEE OUR PROJECTS
          </a>
        </div>
      </SwiperSlide>
      
    </Swiper>
  
    
    </>
    
  
  )
}

export default Header