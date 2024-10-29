import React from 'react'
import './css/home.css'
import './css/responsive.css'
import Header from './Header'
import Solution from './Solution'
import About from './About'
import Why_choose from './Why_choose'
import About2 from './About2'
import Testimonial from './Testimonial'
import Latest_news from './Latest_news'
import Footer from './Footer'
import Hero from './Hero'

function Home() {
  return (
    <>
        <div className='hero-overlay'>
     <Header/>
     <Hero/>
         </div>
        <Solution/>
        <About/>
        <Why_choose/>
        <About2/>
        <Testimonial/>
        <Latest_news/>
        <Footer/>
    </>
  )
}

export default Home