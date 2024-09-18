import React from 'react'
import './Topbar.css'

function Topbar() {
  return (

<>


<div className="mainTopbar-cont flex justify-between flex-wrap">



<div className='main-cont-only-phone-email flex flex-wrap'>

<div className='phone-cont'>
<span><i class="fa-solid fa-phone" style={{
    color:"#c65f70"
}}></i></span>
<span className='phone'> Call : +92-3123456897</span>
</div>


<div className='email-cont'>
<span><i class="fa-regular fa-envelope" style={{
    color:"#c65f70",
    fontSize:"0.8rem",
    fontWeight:"bold"
}}></i></span>
<span className='email'> example@gmail.com</span>
</div>

</div>



<div className="socialMediaIcons mr-5 mt-2  flex flex-wrap">

<div className='fb text-center inline-flex alignItems-center justify-center mr-2'>

<span className='m-auto fb-icon'>
<i class="fa-brands fa-facebook-f"> </i>
    </span>
  
    </div>


<div className='fb text-center inline-flex alignItems-center justify-center mr-2'>

<span className='m-auto insta-icon'>
<i class="fa-brands fa-instagram"></i>
    </span>
  
    </div>

<div className='fb text-center inline-flex alignItems-center justify-center mr-2'>

<span className='m-auto fb-icon'>
<i class="fa-brands fa-linkedin"></i>
    </span>
  
    </div>

<div className='fb text-center inline-flex alignItems-center justify-center mr-2'>

<span className='m-auto fb-icon'>
<i class="fa-brands fa-twitter"></i>
    </span>
 
    </div>





</div>





</div>


</>
)
}

export default Topbar