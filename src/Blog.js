import React from 'react'
import Header from './Header'
import blog1 from './imgaes/single_blog_1.jpg.webp'
import blog2 from './imgaes/single_blog_2.jpg.webp'
import blog3 from './imgaes/single_blog_3.jpg.webp'
import blog4 from './imgaes/single_blog_4.jpg.webp'
import blog5 from './imgaes/single_blog_5.jpg.webp'
import Footer from './Footer'

import Blog_right_sidebar from './Blog_right_sidebar'
import Hero_title from './Hero_title'


function Blog() {
  return (
            <div> 
        <div className='hero-overlay'>
    <Header/>
    <Hero_title hero='Blog'/>
        </div>
        <div className='blog_area'>
            <div className='container1'>
                <div className='row'>
                    <div className='col-lg-8 col-12'>
<div className='blog'>
    <div className='blog_item_img'>
        <img src={blog1}></img>
        <div className='blog_item_date'>
            <a href='#'>
            <h3 className='m-0'>15</h3>
            <p className='m-0'>Jan</p>
            </a>
        </div>
    </div>
<div className='blog_details'>
<a href='#' className='para3'>
    Google inks pact for new 35-storey office
    </a>
    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>

</div>
<div className='blog_info_links'>
    <a href='#'>
    <i class="bi bi-person-fill"></i> Travel,Lifestyle
    </a>  <span>|</span> <a href='#'>
    <i class="bi bi-chat-fill"></i> 03 Comments
    </a>
</div>
</div>
<div className='blog'>
    <div className='blog_item_img'>
        <img src={blog2}></img>
        <div className='blog_item_date'>
           <a href='#'>
           <h3 className='m-0'>15</h3>
           <p className='m-0'>Jan</p>
           </a>
        </div>
    </div>
<div className='blog_details'>
<a href='#' className='para3'>
    Google inks pact for new 35-storey office
    </a>
    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>

</div>
<div className='blog_info_links'>
    <a href='#'>
    <i class="bi bi-person-fill"></i> Travel,Lifestyle
    </a>  <span>|</span> <a href='#'>
    <i class="bi bi-chat-fill"></i> 03 Comments
    </a>
</div>
</div>
<div className='blog'>
    <div className='blog_item_img'>
        <img src={blog3}></img>
        <div className='blog_item_date'>
           <a href='#'>
           <h3 className='m-0'>15</h3>
           <p className='m-0'>Jan</p>
           </a>
        </div>
    </div>
<div className='blog_details'>
<a href='#' className='para3'>
    Google inks pact for new 35-storey office
    </a>
    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>

</div>
<div className='blog_info_links'>
    <a href='#'>
    <i class="bi bi-person-fill"></i> Travel,Lifestyle
    </a>  <span>|</span> <a href='#'>
    <i class="bi bi-chat-fill"></i> 03 Comments
    </a>
</div>
</div>
<div className='blog'>
    <div className='blog_item_img'>
        <img src={blog4}></img>
        <div className='blog_item_date'>
        <a href='#'>
           <h3 className='m-0'>15</h3>
           <p className='m-0'>Jan</p>
           </a>
        </div>
    </div>
<div className='blog_details'>
<a href='#' className='para3'>
    Google inks pact for new 35-storey office
    </a>
    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>

</div>
<div className='blog_info_links'>
    <a href='#'>
    <i class="bi bi-person-fill"></i> Travel,Lifestyle
    </a>  <span>|</span> <a href='#'>
    <i class="bi bi-chat-fill"></i> 03 Comments
    </a>
</div>
</div>
<div className='blog'>
    <div className='blog_item_img'>
        <img src={blog5}></img>
        <div className='blog_item_date'>
        <a href='#'>
           <h3 className='m-0'>15</h3>
           <p className='m-0'>Jan</p>
           </a>
        </div>
    </div>
<div className='blog_details'>
<a href='#' className='para3'>
    Google inks pact for new 35-storey office
    </a>
    <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>

</div>
<div className='blog_info_links'>
    <a href='#'>
    <i class="bi bi-person-fill"></i> Travel,Lifestyle
    </a>  <span>|</span> <a href='#'>
    <i class="bi bi-chat-fill"></i> 03 Comments
    </a>
</div>
</div>
                    </div>
                    <div className='col-lg-4 col-12'>
    <Blog_right_sidebar/>
                </div>
            </div>
        </div>

        
    </div>
    <Footer/>
    </div>
  )
}

export default Blog