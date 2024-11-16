import React from 'react'

import Header from './Header'
import Solution from './Solution'
import About2 from './About2'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Hero_title from './Hero_title'

function Services_page() {
  return (
    <div> 
        <div className='hero-overlay'>
    <Header/>
    <Hero_title hero='Services'/>
        </div>
        <Solution/>
        <About2/>
        <Testimonial/>
        <Footer/>
        </div>
  )
}

export default Services_page