import React from 'react'
import Hero_services from './Hero_services'
import Header from './Header'
import Solution from './Solution'
import About2 from './About2'
import Testimonial from './Testimonial'
import Footer from './Footer'

function Services_page() {
  return (
    <div> 
        <div className='hero-overlay'>
    <Header/>
    <Hero_services/>
        </div>
        <Solution/>
        <About2/>
        <Testimonial/>
        <Footer/>
        </div>
  )
}

export default Services_page