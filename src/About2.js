import React from 'react'
import number1 from './imgaes/number1.svg'
import about2 from './imgaes/about2.jpg.webp'
function About2() {
  return (
    <div>
        <div className='about2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 about_content2'>
                        <h2 className='tittle2'>Get loan in 3 easy steps</h2>
                    <p className='sub_tittle2'>Tools such as a profit simulator and tax calculator show the value of your stock options and exercise cost. The brochure must grab a viewer’s attention and hold it long enough to deliver the pertinent information.</p>
                    <hr/>
                    <div className='about_single d-flex'>
                        <div className='icon'>
<img src={number1}></img>
                        </div>
                        <div className='para'>
                        Monthly recurring revenue
                        </div>
                    </div>
                    <div className='about_single d-flex'>
                        <div className='icon'>
<img src={number1}></img>
                        </div>
                        <div className='para'>
                        Customer acquisition cost
                        </div>
                    </div>
                    <div className='about_single d-flex'>
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
                  
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <div className='about2_img'>
                            <img src={about2}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About2