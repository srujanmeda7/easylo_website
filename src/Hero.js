import React, { useEffect, useState } from 'react'

function Hero() {
  const[dropdown_icon,setdropdown_icon]=useState(false);
  const[dropdown_icon2,setdropdown_icon2]=useState(false);
  const[select1,set_select1]=useState("Select Amount");

  
  console.log(dropdown_icon)  
 
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
                       <div className='select-menu' onClick={()=>{setdropdown_icon(!dropdown_icon)}}>
                        <div className='select-btn' >
                          
                          <span className='btn-text'>{select1}</span>
                          <span><i class="bi bi-chevron-down" style={{ transform: dropdown_icon ? 'rotate(180deg)' : 'none' }}></i></span>
                        </div>
                        <ul className={`options ${dropdown_icon?"open":""}`}>
                          <li className='option' onClick={()=>{set_select1("category 1")}} >
                            category 1
                          </li>
                          <li className='option' onClick={()=>{set_select1("category 2")}}>
                          category 2
                          </li>
                          <li className='option' onClick={(e)=>{set_select1("category 3")}}>
                          category 3
                          </li>

                        </ul>
                       </div>
                        <br></br>
                        <label>AMOUNT YOU WANT</label>
                        <br></br>
                       <div className='select-menu' onClick={()=>{setdropdown_icon2(!dropdown_icon2)}}>
                        <div className='select-btn' >
                          <span className='btn-text'>Select Month</span>
                          <span><i class="bi bi-chevron-down" style={{ transform: dropdown_icon2? 'rotate(180deg)' : 'none' }}></i></span>
                        </div>
                        <ul className={`options ${dropdown_icon2?"open":""}`}>
                          <li className='option'  onClick={()=>{set_select1("category 1")}}>
                          category 1
                          </li>
                          <li className='option'  onClick={()=>{set_select1("category 2")}}>
                          category 2
                          </li>
                          <li className='option'  onClick={()=>{set_select1("category 3")}}>
                          category 3
                          </li>

                        </ul>
                       </div>
                        <p>YOU HAVE TO PAY:<span className='dollar'>$0</span></p>
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