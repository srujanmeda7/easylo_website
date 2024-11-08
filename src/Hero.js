import React from 'react'

function Hero() {
  return (
    <>
     <div className='hero_content'>
          <div className='container'>
                <div className='row '>
                    <div className='col-md-6  '>
                       <div className='hero_content-left '>
                       <h1>The simple online home loan.</h1>
                        <p>Financial uncertainty is hard on employees, and causes even.</p>
                        <a href='#' >
                          OUR SERVICES
                        </a>
                       </div>
                    </div>
                    <div className='col-md-6  hero_content-right'>
                      <form>
                        <div className='form_tittle text-center'>
                        <h2>How much you want?</h2>
                        <p>We provide online instant cash loans.</p>
                        </div>
                      <div className='form_body'>
                      <label>AMOUNT YOU WANT</label>
                        <br></br>
                        <select required="">
                          <option>Select Amount</option>
                          <option>category1</option>
                          <option>category2</option>
                          <option>category3</option>
                        </select>
                        <br></br>
                        <label>MONTH</label>
                        <br></br>
                        <select>
                          <option>Select Amount</option>
                          <option>category1</option>
                          <option>category2</option>
                          <option>category3</option>
                        </select>
                        <p>YOU HAVE TO PAY:<span>$0</span></p>
                        <a href='#'>APPLY NOW</a>
                        <h5>We provide online instant cash loan</h5>
                      </div>
                      </form>
                    </div>
                </div>
            </div>
          </div>
        
    </>
  )
}

export default Hero