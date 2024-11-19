import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero_title from './Hero_title'

function Contact() {
  return (
    <div>
       <div className='hero-overlay'>
    <Header/>
        <Hero_title hero='Contact'/>
    </div>
    <div className='container1'>
      <div className='map_section'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4325.919165810755!2d78.39767108368311!3d17.493623140480842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b5f7d76543%3A0x97fd443d27eecbc6!2s7iTECH%20SOLUTIONS%20BEST%20SOFTWARE%20TRAINING%20INSTITUTE%20IN%20HYDERABAD%20%7C%20FULL%20STACK%20JAVA%7CPYTHON%7CPHP%7C.NET%7CDIGITALMARKETING%20%7CPLACEMENTS!5e0!3m2!1sen!2sin!4v1732010046386!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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