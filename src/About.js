import React from 'react'
import about from './imgaes/about1.jpg.webp'
import number1 from './imgaes/number1.svg'

function About() {
  return (
    <>
    <div className='we_guide_projects'>
        <div className='container'>
            <div className='row '>
                <div className='col-lg-6 col-12 d-flex justify-content-center'>
                    <div className='about_img'>
                    <img src={about}></img>
                    <div className='info_man text-center'>
                        <h1>99%</h1>
                        <p>Customer Satisfaction</p>
                    </div>
                    </div>
                   
                    
                </div>
                <div className='col-lg-6 col-12'>
                    <div className='about_content'>
                    <h2 className='tittle2'>We guide projects and organizations in making the right decisions.</h2>
                   
                    <p className='sub_tittle2'>Tools such as a profit simulator and tax calculator show the value of your stock options and exercise cost. The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information.</p>
                    <hr/>
                    <div className='about_single d-flex '>
                        <div className='icon'>
<img src={number1}></img>
                        </div>
                        <div className='para'>
                        Monthly recurring revenue
                        </div>
                    </div>
                    <div className='about_single d-flex '>
                        <div className='icon'>
<img src={number1}></img>
                        </div>
                        <div className='para'>
                        Customer acquisition cost
                        </div>
                    </div>
                    <div className='about_single d-flex '>
                        <div className='icon'>
<img src={number1}></img>
                        </div>
                        <div className='para'>
                        Number of customers
                        </div>
                    </div>
                    <a href='#' className='learn_more'>
                        LEARN MORE
                    </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About