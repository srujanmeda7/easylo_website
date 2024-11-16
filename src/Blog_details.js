import React from 'react'
import Header from './Header'
import Blog_right_sidebar from './Blog_right_sidebar'
import post1 from './imgaes/single_blog_1.jpg.webp'
import author from './imgaes/author.png.webp'
import post_10 from './imgaes/post_10.jpg.webp'
import comment1 from './imgaes/comment_1.png.webp'
import comment2 from './imgaes/comment_2.png.webp'
import comment3 from './imgaes/comment_3.png.webp'
import Footer from './Footer'
import Hero_title from './Hero_title'

function Blog_details() {
  return (
    <div>
        <div className='hero-overlay'>
    <Header/>
    <Hero_title hero='Blog Details'/>
        </div>
        <div className='blog_page_details'>
          <div className='container1'>
            <div className='row'>
              <div className='col-lg-8 post_list'>
                <div className='single_post'>
                  <div className='post_img'>
                    <img src={post1}></img>
                  </div>
                  <h5>
                  Second divided from form fish beast made every of seas all gathered us saying he our
                  </h5>
                  <div className='blog_info_links post_info_links'>
    <a href='#'>
    <i class="bi bi-person-fill"></i> Travel,Lifestyle
    </a>  <span>|</span> <a href='#'>
    <i class="bi bi-chat-fill"></i> 03 Comments
    </a>
</div>
<p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
   <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>     
             <div className='quote_wrapper'>
              <div className='quote'>
              MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.
              </div>
             </div>
             <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
               <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
                <hr/>
                <div className='likes_social_links'>
                  <div className='likes '>
                  <i class="bi bi-suit-heart-fill"></i>
                  <p>Lily and 4 people like this</p>
                  </div>
                  <ul className='post_social_links p-0'>
                  <li><a href='#'>
                  <i class="bi bi-facebook"></i></a></li>
                  <li>
                    <a href='#'>
                    <i class="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <i class="bi bi-globe"></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                    <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                  </ul>
                </div>
                <div className='navigate_section'>
                  <div className='prevoius d-flex'>
                    <div className='prev_img_link'>
                      <a href='#'>
                      <img src={post_10}></img>
                      </a>
                      <div className='sub_prev'>
                      <a href='#'>
                      <i class="bi bi-arrow-left"></i>
                      </a>
                      </div>
                    </div>
                   <div className='navigate_links'>
                    <p>prev post</p>
                    <a href='#'>
Space The Final Frontier
                    </a>
                   </div>
                  </div>

                  <div className='prevoius d-flex justify-content-end'>
                   
                   <div className='navigate_links'>
                    <p className='text-end'>Next Post</p>
                    <a href='#'>
Telescopes 101 
                    </a>
                   </div>
                   <div className='prev_img_link'>
                      <a href='#'>
                      <img src={post_10}></img>
                      </a>
                      <div className='sub_prev'>
                      <a href='#'>
                      <i class="bi bi-arrow-right"></i>                      </a>
                      </div>
                    </div>
                  </div>
                  
                </div>
                </div>
<div className='blog_author d-flex'>
  <div className='blog_author_img'>
    <img src={author}></img>
  </div>
  <div className='author_content'>
      <h5>Harvard milan</h5>
      <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>
    </div>
</div>
<hr/>
<div className='commemts_section'>
  <h5>05 Comments</h5>
  <div className='comment_body'>
    <div className='comment_img'>
      <img src={comment1}></img>
    </div>
<div className='comment'>
<p>Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
<div className='comment_details d-flex justify-content-between'>
<div className='d-flex'>
<a href='#'>
    Emilly Blunt
  </a>
  <span>
  December 4, 2017 at 3:12 pm
  </span>
</div>
  <a href='#' className='reply'>
    REPLY
  </a>
</div>
  </div>  
  </div>


  <div className='comment_body'>
    <div className='comment_img'>
      <img src={comment2}></img>
    </div>
<div className='comment'>
<p>Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
<div className='comment_details d-flex justify-content-between'>
<div className='d-flex'>
<a href='#'>
    Emilly Blunt
  </a>
  <span>
  December 4, 2017 at 3:12 pm
  </span>
</div>
  <a href='#' className='reply'>
    REPLY
  </a>
</div>
  </div>  
 

</div>

  <div className='comment_body'>
    <div className='comment_img'>
      <img src={comment3}></img>
    </div>
<div className='comment'>
<p>Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
<div className='comment_details d-flex justify-content-between'>
<div className='d-flex'>
<a href='#'>
    Emilly Blunt
  </a>
  <span>
  December 4, 2017 at 3:12 pm
  </span>
</div>
  <a href='#' className='reply'>
    REPLY
  </a>
</div>
 
  </div>

</div>
<hr/>
</div>
<div className='reply_section'>
<h5>Leave a reply</h5>
<textarea placeholder='write Comment'></textarea>
<div className='row gy-3'>
<div className='col-md-6'>
<input placeholder='Name'/>
</div>
<div className='col-md-6'>
<input placeholder='Email'/>
</div>
</div>
<br></br>
<input  placeholder='Website'/>
<a href='#' className='btn2'>
  POST COMMENT
</a>
</div>
              </div>

              <div className='col-lg-4'>
                <Blog_right_sidebar/>
              </div>
            </div>
            
          </div>
          
        </div>
        <Footer/>
    </div>
  )
}

export default Blog_details