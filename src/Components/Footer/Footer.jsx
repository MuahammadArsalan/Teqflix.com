import React from 'react'
import './footer.css'


function Footer() {
  return (
<>

<div id='footer-cont'>

<div className='flex flex-wrap justify-around '>


    {/* Logo And Para only Started */}

<div className="flex justify-around flex-wrap">



<div id='Image-cont' className='mt-10'>
<img src="./Images/teqflix-logo.png" className='w-[13rem] h-[3.5rem] mt-3 ml-8' alt="logo"   />

</div>


<div className='mt-5 ml-8 w-[45vw]'>
    <p className='text-xl mt-[2.2rem]'> Our vertical solutions expertise allows your business to streamline workflow, and increase productivity.</p>
</div>


<div className='w-[20vw]'>

</div>


</div>

    {/* Logo And Para only Ended */}



    {/* Detaile Section  Started */}

<div className='flex flex-wrap justify-around w-[55vw] mt-[5rem]'  id='footernavigation-box'>

{/* Our Company Box */}


<div>


<h1 className='our-company-txt  '>Our Company</h1>


<div className='mt-[1rem]'>

    <p className='footer-tabs'><span className='h-span'>Home</span></p>
    <p className='footer-tabs'><span className='h-span'>Company</span></p>
    <p className='footer-tabs'><span className='h-span'>Blog</span></p>
    <p className='footer-tabs'> <span className='h-span'>Contact Us </span></p>
    </div>



</div>


{/* Useful link Box */}

<div>


<h1 className='our-company-txt  '>Useful Links</h1>


<div className='mt-[1rem]'>

    <p className='footer-tabs'><span className='h-span'>FAQ's</span></p>
    <p className='footer-tabs'><span className='h-span'>Services</span></p>
    <p className='footer-tabs'><span className='h-span'>Case Studies</span></p>
    <p className='footer-tabs'> <span className='h-span'>Career</span></p>
    </div>



</div>



{/* Contact US  Box */}

<div>


<h1 className='our-company-txt  '>Contact info</h1>


<div className='mt-[1rem]'>

<p className='contact-info-para'><span><i class="fa-solid fa-phone"></i></span>
    <span> <span> </span> Call:+92-312345689</span>

</p>


<p className='contact-info-para'><span>
    <i class="fa-regular fa-envelope" ></i></span>
<span> <span> " * "</span> Send A Message</span>
    </p>
    </div>



</div>




</div>



<div>
    <img  className='mt-[6.5rem] mr-10 w-[14rem]'  src="./Images/Mobile App logo Footer.png" id='footer-logo' alt="" />
</div>



</div>

    {/* Detaile Section  Ended */}


{/* All right reserved Para Started */}


<div className='flex flex-wrap justify-around w-[65vw] ml-8' id='last-footer-box'>



<div className='flex flex-wrap justify-around w-[15vw] mt-[3rem]' id='div-ic-foot'> 
    <div className='icons-footer' id='facebook'><i class="fa-brands fa-facebook"></i></div>
    <div className='icons-footer' id='instagram'><i class="fa-brands fa-instagram"></i></div>
    <div id='in' className='icons-footer'><i class="fa-brands fa-linkedin"></i></div>
    <div id='twitter' className='icons-footer'><i class="fa-brands fa-twitter"></i></div>
    <div id='youtube' className='icons-footer'><i class="fa-brands fa-youtube"></i></div>
</div>



<div className='reserved-div'>
    <p id='reserved-para'>2021-2024 Copyright<span><i class="fa-regular fa-copyright"></i></span> All Rights reseved @Teqflix.com </p>
</div>


</div>


{/* All right reserved Para Endeed */}



</div>
</>
  )
}

export default Footer