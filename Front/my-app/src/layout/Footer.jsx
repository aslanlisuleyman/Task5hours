import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='foot'>

        <div> 
            <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png.webp" alt="" />
        </div>
        <div style={{display:"flex",gap:"2.5%",marginLeft:'58px'}}>
            <div className='yumru'><i style={{color:"#041690"}} class="fa-brands fa-facebook-f"></i></div>
            <div className='yumru'><i style={{color:"white"}} class="fa-brands fa-square-x-twitter"></i></div>
            <div className='yumru'><i style={{color:"red"}} class="fa-brands fa-pinterest"></i></div>
            <div className='yumru'><i style={{color:"#004f98 "}} class="fa-brands fa-linkedin-in"></i></div>
            <div className='yumru'><i style={{color:"#00bfff"}} class="fa-brands fa-skype"></i></div>
            
        </div>
        <div><p style={{color:'white'}}>Copyright @2018 All rights reserved | This template is made with  by Colorlib</p></div>
    </div>
  )
}

export default Footer