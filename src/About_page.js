import React from 'react'
import Hero from './Hero'
import Header from './Header'

import About from './About'
import Why_choose from './Why_choose'
import About2 from './About2'
import Testimonial from './Testimonial'
import Latest_news from './Latest_news'
import Footer from './Footer'
import Hero_title from './Hero_title'


function About_page() {
  return (
    <div>
        <div className='hero-overlay'>
     <Header/>
     <Hero_title hero='About'/>
         </div>
         <About/>
         <Why_choose/>
        <About2/>
        <Testimonial/>
        <Latest_news/>
        <Footer/>
    </div>
  )
}

export default About_page