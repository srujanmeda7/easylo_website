import React from 'react'
import post1 from './imgaes/post_1.jpg.webp'
import post2 from './imgaes/post_2.jpg.webp'
import post3 from './imgaes/post_3.jpg.webp'
import post4 from './imgaes/post_4.jpg.webp'
import post5 from './imgaes/post_5.jpg.webp'
import post6 from './imgaes/post_6.jpg.webp'
import post7 from './imgaes/post_7.jpg.webp'
import post8 from './imgaes/post_8.jpg.webp'
import post9 from './imgaes/post_9.jpg.webp'
import post10 from './imgaes/post_10.jpg.webp'

function Blog_right_sidebar() {
  return (
    <div>                  
          <div className='blog_right_sidebar'>
    <div className='search_menu blog_right_bgcolor'>
        <input placeholder=' Search Keyword'/><a href='#' >Search</a>
    </div>
    <div className='category blog_right_bgcolor'>
        <h5>Categoty</h5>
        <hr/>
    <div className='mt-5'>
    <a href='#'>Resaurant food(37)</a>
        <hr/>
        <a href='#'>Travel news(10)</a>
        <hr/>
        <a href='#'>Modern technology(03)</a>
        <hr/>
        <a href='#'>Product

(11)</a>
        <hr/>
        <a href='#'>Inspiration

21</a>
        <hr/>
        <a href='#'>Health Care (21)

09</a>
        
    </div>
    </div>
</div>
<div className='recent_Post blog_right_bgcolor'>
<h5>Recent Post</h5>
        <hr className='mb-5'/>
    <div className='post_item '>
        <img src={post1}></img>
        <div className='post_body'>
            <a href='#'>
            From life was you fish...
            </a>
            <p>January 12, 2019</p>
        </div>
    </div>
    <div className='post_item '>
        <img src={post2}></img>
        <div className='post_body'>
            <a href='#'>
            From life was you fish...
            </a>
            <p>January 12, 2019</p>
        </div>
    </div>
    <div className='post_item '>
        <img src={post3}></img>
        <div className='post_body'>
            <a href='#'>
            From life was you fish...
            </a>
            <p>January 12, 2019</p>
        </div>
    </div>
    <div className='post_item '>
        <img src={post4}></img>
        <div className='post_body'>
            <a href='#'>
            From life was you fish...
            </a>
            <p>January 12, 2019</p>
        </div>
    </div>
</div>
<div className='tag_clouds blog_right_bgcolor'>
<h5>Tag Clouds</h5>
<hr/>
<ul className='list p-0'>
    <li>
        <a href='#'>
            projects
        </a>
    </li>
    <li>
        <a href='#'>
            love
        </a>
    </li>
    <li>
        <a href='#'>
            technology
        </a>
    </li>
    <li>
        <a href='#'>
            travel
        </a>
    </li>
    <li>
        <a href='#'>
            restaurant
        </a>
    </li>
    <li>
        <a href='#'>
            life style
        </a>
    </li>
    <li>
        <a href='#'>
            design
        </a>
    </li>
    <li>
        <a href='#'>
            illustration
        </a>
    </li>
</ul>
</div>
<div className='instagram_feeds blog_right_bgcolor'>
    <h5>Instagram Feeds</h5>
    <hr/>
    <div className='instagram_row '>
        <ul className='p-0'>
            <li>
                <a href='#'>
                    <img src={post5}></img>
                </a>
            </li>
            <li>
                <a href='#'>
                    <img src={post6}></img>
                </a>
            </li>
            <li>
                <a href='#'>
                    <img src={post7}></img>
                </a>
            </li>
            <li>
                <a href='#'>
                    <img src={post8}></img>
                </a>
            </li>
            <li>
                <a href='#'>
                    <img src={post9}></img>
                </a>
            </li>
            <li>
                <a href='#'>
                    <img src={post10}></img>
                </a>
            </li>
        </ul>
    </div>
</div>
<div className='news_letter blog_right_bgcolor'>
<h5>Newsletter</h5>
<hr/>
<input placeholder="   Enter email"/>
<a href='#'>
SUBSCRIBE
</a>
</div></div>
  )
}

export default Blog_right_sidebar