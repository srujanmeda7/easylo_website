import React from 'react'
import service4 from'./imgaes/services4.svg'
import services5 from './imgaes/services5.svg'
import service6 from './imgaes/services6.svg'
import service7 from './imgaes/services7.svg'

function Why_choose() {
  return (
    <>
    <div className='why_choose'>
    <div className='why_choose_tittle text-center'>
        <div className='container'>
            <h2 className='tittle'>Why choose us? </h2>
            <div className='row justify-content-center' >
        <div className='col-xl-5 col-lg-6 col-md-8 '>
<p className='sub_tittle'>
The brochure must grab a viewer’s attention and hold it long
enough to deliver the pertinent information.</p>
</div>
</div>
        </div>
    </div>
    <div className='why_choose_content text-center'>
        <div className='container'>
            <div className='row '>
                <div className='col-xl-3 col-md-6 col-12'>

<img src={service4}></img>

<a href='#' className='para1'>Quicky apply</a>
<p className='para2'> Tools such as a profit simulator and tax simulator calculator show the value of your stock options and exercise cost</p>
                </div>
                <div className='col-xl-3 col-md-6 col-12'>
                    
<img src={services5}></img>

<a href='#' className='para1'>Online & Secure</a>
<p className='para2'> Tools such as a profit simulator and tax simulator calculator show the value of your stock options and exercise cost</p>
                </div>
                <div className='col-xl-3 col-md-6 col-12'>
                    
<img src={service6}></img>

<a href='#' className='para1'>Just time</a>
<p className='para2'> Tools such as a profit simulator and tax simulator calculator show the value of your stock options and exercise cost</p>
                </div>
                <div className='col-xl-3 col-md-6 col-12'>
                    
<img src={service7}></img>

<a href='#' className='para1'>Low interest</a>
<p className='para2'> Tools such as a profit simulator and tax simulator calculator show the value of your stock options and exercise cost</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Why_choose