import React from 'react'
import Hero_contact from './Hero_contact'
import Header from './Header'
import Footer from './Footer'

function Contact() {
  return (
    <div>
       <div className='hero-overlay'>
    <Header/>
        <Hero_contact/>
    </div>
    <div className='container1'>
      <div className='map_section'>

      </div>
    </div>
    <div className='container1'>
<div className='row'>
  <div className='col-lg-8 col-12'>
  <div className='get_in_touch'>
      <h4>
        Get in Touch
      </h4>
      <textarea placeholder='Enter Message'></textarea>
<div className='row'>
  <div className='col-md-6 col-12'>
<input placeholder='Enter your name'/>
  </div>
  <div className='col-md-6 col-12'>
<input placeholder='Email'/>
  </div>
</div>
<input placeholder='Enter Subject'/>
<a href="#" className='btn2'>SEND</a>
    </div>
  </div>
  <div className='col-lg-4 col-12'>
    <div className='address_section'>
      <div className='address'>
        <div className=''>
        <i class="bi bi-house"></i>
        </div>
        <div>
          <h5>Buttonwood, California.</h5>
          <p>Rosemead, CA 91770</p>
        </div>
      </div>
      <div className='address'>
        <div className=''>
        <i class="bi bi-telephone"></i> 
        </div>
        <div>
          <h5>+1 253 565 2365</h5>
          <p>Mon to Fri 9am to 6pm</p>
        </div>
      </div>
      <div className='address'>
        <div className=''>
        <i class="bi bi-envelope"></i>
        </div>
        <div>
          <h5>support@colorlib.com</h5>
          <p>Send us your query anytime!</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<Footer/>
    </div>
  )
}

export default Contact