import React from 'react'
import founder_img from './imgaes/testimonial.png.webp'
import quote from './imgaes/quotes-sign.png.webp'

function Testimonial() {
  return (
    <div>
        <div className='testimonial'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-8'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
 <div className='testimonial-caption'>
 <img src={quote}></img>
      <p>
      "I had 15+ folks reach out to me on EasyLo. I was completely blown away by how easy it's been to reach these prospective buyers. We weren't necessarily looking to sell but EasyLo has been A+. From start to finish, we were acquired within 30-days at full asking price."
      </p>
 </div>
      <div className='testimonial-founder d-flex'>
      <div className='founder_img'>
        <img src={founder_img}></img>
      </div>
      <div className='founder-text'>
        <span>Ash Wednesday</span>
        <p>Designer at Colorlib</p>
      </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className='testimonial-caption '>
 <img src={quote}></img>
      <p>
      "I had 15+ folks reach out to me on EasyLo. I was completely blown away by how easy it's been to reach these prospective buyers. We weren't necessarily looking to sell but EasyLo has been A+. From start to finish, we were acquired within 30-days at full asking price."
      </p>
 </div>
      <div className='testimonial-founder d-flex'>
      <div className='founder_img'>
        <img src={founder_img}></img>
      </div>
      <div className='founder-text'>
        <span>Ash Wednesday</span>
        <p>Designer at Colorlib</p>
      </div>
      </div>
    </div>
    
  </div>
  <div className='d-flex justify-content-end'>
 <ul className='slick-dots_out'>
 <li  >
 <button class="carousel-control-prev carousel-control" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span>1</span>
    <span class="visually-hidden">Previous</span>
  </button>
 </li>
  <li className='slick-dots'>
  <button class="carousel-control-next carousel-control" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span>2</span>
    <span class="visually-hidden">Next</span>
  </button>
  </li>
 </ul>
</div>
</div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial