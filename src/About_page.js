import React from 'react'
import Hero from './Hero'
import Header from './Header'
import Hero_about from './Hero_about'
import About from './About'
import Why_choose from './Why_choose'
import About2 from './About2'
import Testimonial from './Testimonial'
import Latest_news from './Latest_news'
import Footer from './Footer'


function About_page() {
  return (
    <div>
        <div className='hero-overlay'>
     <Header/>
     <Hero_about/>
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