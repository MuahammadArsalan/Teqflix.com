import React from 'react'

import './Navbar.css'


function Navbar() {
  return (

<>

<div className="mainNav-cont flex flex-wrap">


<div className='ml-[3rem] mt-3 flex flex-wrap'>

<img src="./Images/teqflix-logo.png" width="220px" height="100px" alt=""  />

</div>




<div className='tabs mr-[5rem] flex flex-wrap'>


<p className='tabs-value'>Home page</p>
<p className='tabs-value'>Company</p>
<p className='tabs-value'>Case Studies</p>
<p className='tabs-value'>Services</p>
<p className='tabs-value'>Blog</p>
<p className='tabs-value'>Career</p>
<p className='tabs-value'>Contact Us</p>


</div>


</div>


</>

)
}

export default Navbar