import React from 'react'
import blog1 from './imgaes/blog1.jpg.webp'
import blog2 from './imgaes/blog2.jpg.webp'
import blog3 from './imgaes/blog3.jpg.webp'

function Latest_news() {
  return (
    <div>
        <div className='latest_news'>
            <div className='latest_news_tittle text-center'>
                <h1 className='tittle'>Latest News</h1>
            </div>
            <div className='latest_news_body'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-4 col-12 blog'>
                            <div className='blog_img'>
                                <a href='#'>
                                    <img src={blog1}></img>
                                </a>
                            </div>
                            <span>20 March 2021</span>
                            <a href='#' className='para1'>
                            What are my options worth and the cost to exercise

                            </a>
                            <p className='para2'>Tools such as a profit simulator and tax calculator show the value of your stock options and exercise cost.

</p>
                        </div>
                        <div className='col-lg-4 col-12 blog'>
                            <div className='blog_img'>
                                <a href='#'>
                                    <img src={blog2}></img>
                                </a>
                            </div>
                            <span>20 March 2021</span>
                            <a href='#' className='para1'>
                            From start to finish, we were acquired within 30-days


                            </a>
                            <p className='para2'>Tools such as a profit simulator and tax calculator show the value of your stock options and exercise cost.

</p>
                        </div>
                        <div className='col-lg-4 col-12 blog'>
                            <div className='blog_img'>
                                <a href='#'>
                                    <img src={blog3}></img>
                                </a>
                            </div>
                            <span>20 March 2021</span>
                            <a href='#' className='para1'>
                            We’ll connect you with the right people to start

                            </a>
                            <p className='para2'>Tools such as a profit simulator and tax calculator show the value of your stock options and exercise cost.

</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest_news