
import { useNavigate } from 'react-router-dom'
import logo from './imgaes/logo.png.webp'
import { useEffect, useRef, useState } from 'react';
function Header() {
  const [menuopen,setmenu]=useState(true);
  const [menu_icon,setmenu_icon]=useState(false);
  const navigate=useNavigate();
 const[isFixed,setIsFixed]=useState(false);

 useEffect(() => {
  const handleScroll = () => {
    const scrollPercentage =
      (window.scrollY / document.body.scrollHeight) * 100;

    if (scrollPercentage > 15) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
       <div className={`header-area ${isFixed ? "fixed" : ""}`}>
      <div className='container'>
        <div className='row'>


            <div className='col-lg-2 col-12 logo_column'>
               <div className='logo'>
                   <a href='#' onClick={()=>navigate("/")}>
                   <img src={
                        logo
                    } />
                   </a>
                </div>
                <div className='toggle-icon ' onClick={()=>{setmenu(!menuopen)}}>
                <i class="bi bi-list"></i>
            
               </div>
               
            </div>
            <div className='col-lg-10 d-lg-flex justify-content-end d-none '>
              
                
              
                <ul >
                    <li><a href='#' onClick={()=>navigate("/")}>Home</a></li>
                    <li><a href='#' onClick={()=>navigate("/about")}>About</a></li>
                    <li><a href='#' onClick={()=>navigate("/services")}>Service</a></li>
                    <li><a href='#'>Blog</a>
                      <ul className='submenu'>
                        <li>
                            <a href='#' onClick={()=>navigate("/blog")}>Blog</a>
                        </li>
                        <li>
                          <a href='#'onClick={()=>navigate("/blog_details")} >
                          Blog Details
                          </a>
                        </li>
                    
                      </ul>
                    </li>
                    <li><a href='#' onClick={()=>navigate("/contact")}>Contact</a></li>
                    <li> <a href='#' onClick={()=>navigate("/apply_loan")}><button className='header-right-btn'>Apply For Loan</button></a> </li>
                </ul>
              </div>


                </div>
                </div>
                


        
                <div className=' d-block d-lg-none mobile_menu p-0'>
        <div className={menuopen? "header-right " :"open"} >
                <ul >
                    <li><a href='#' onClick={()=>navigate("/")}>Home</a></li>
                    <li><a href='#' onClick={()=>navigate("/about")}>About</a></li>
                    <li><a href='#' onClick={()=>navigate("/services")}>Service</a></li>
                    <li><a href='#'>Blog</a>
                      <ul className='submenu mobile_submenu'>
                        <li>
                            <a href='#' onClick={()=>navigate("/blog")}>Blog</a>
                        </li>
                        <li>
                          <a href='#'onClick={()=>navigate("/blog_details")} >
                          Blog Details
                          </a>
                        </li>
                      
                      </ul>
                    </li>
                    <li><a href='#' onClick={()=>navigate("/contact")}>Contact</a></li>
                    <li> <a href='#' onClick={()=>navigate("/apply_loan")}><button className='header-right-btn'>Apply For Loan</button></a> </li>
                </ul>
                
              </div>
              </div>

        </div>
      
    </>
  )
}

export default Header