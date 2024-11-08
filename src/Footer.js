import React, { useState } from 'react'
import logo from './imgaes/logo2_footer.png.webp'

function Footer() {
    const [inputValue,setinputValue]=useState("");
    const[isemailvalid,setisemailvalid]=useState(false);
    const handleemailChange=(e)=>{
setinputValue(e.target.value);
setisemailvalid(e.target.validity.valid);
    }
    const handleLinkClick=(event)=>{
if(!isemailvalid){
    event.preventDefault();  
}
    }
  return (
    <div>
    <div className='footer_wrapper'>
        <div className='container'>
            <div className='row gy-5'>
                <div className='col-lg-4 col-md-6 col-12'>
                <div className='logo'>
                   <a href='#'>
                   <img src={
                        logo
                    } />
                   </a>
                </div>
                <p className='mt-4'>Tools such as a profit simulator and tax calculator show the value of your stock options and exercise cost.</p>
                </div>
                <div className='col-lg-2 col-md-3 col-12'>
                    <div className='single_footer'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href='#'>Work</a></li>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>Products</a></li>
                            <li><a href='#'>Tips & Tricks</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-2 col-md-3 col-12'>
                <div className='single_footer'>
                        <h4>Solution</h4>
                        <ul>
                            <li><a href='#'>Air freight</a></li>
                            <li><a href='#'>Ocean freight</a></li>
                            <li><a href='#'>Large projects</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 col-12'>
                    <div className='single_footer'>
                        <h4>Newsletter</h4>
                        <p>Subscribe newsletter to get updates.</p>
                  <div className='subscribe'>
                  <input placeholder='Email your email' required type='email' onChange={handleemailChange} value={inputValue}/>
                  <a href='#' onClick={handleLinkClick} >
                    
                  <i class="bi bi-send"></i>
                  </a>
                  <span> <i class="bi bi-check-lg"></i></span>
                  </div> 
                    
                    <div className='footer_icon '>
                    <div className='icon_container'>
                    <a href='#'>
                    <i class="bi bi-facebook"></i>
                    </a>
                    </div>
                    <div className='icon_container'>
                    <a href='#'>
                    <i class="bi bi-instagram"></i>
                    </a>
                    </div>
                    <div className='icon_container'>
                    <a href='#'>
                    <i class="bi bi-linkedin"></i>
                    </a>
                    </div>
                    <div className='icon_container'>
                    <a href='#'>
                    <i class="bi bi-youtube"></i>
                    </a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
<hr className="my-5" />
<div className='text-center copy_right'>
    Copyright <i class="bi bi-c-circle"></i>2024 All rights reserved | This template is made with <span><i class="bi bi-suit-heart-fill"></i></span> by <span>Colorlib</span>
</div>


        </div>
    </div>
    
    </div>
  )
}

export default Footer