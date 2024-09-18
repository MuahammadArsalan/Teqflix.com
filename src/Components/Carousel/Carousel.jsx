import React from 'react'
import './Carousel.css'
function Carousel() {
  return (

<>

<div id='carousel'>

<div className='lorem'>

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, quam tenetur neque asperiores labore dicta impedio nesciunt maiores eum a, ex dignissimos optio alias? Architecto dicta reiciendis velit reprehenderit assumenda sit temporibus nulla consequatur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati velit blanditiis quas natus aliquam amet odit tempora itaque officiis consequuntur ullam laborum, sit quo neque fugiat quaerat aliquid expedita omnis.

</div>


<div  id='carousel-div' className="carousel carousel-vertical h-96" >
  <div className="carousel-item h-full">
    <img src="./Images/img.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="./Images/img1.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="./Images/img2.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="./Images/img3.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="./Images/img4.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="./Images/img5.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="./Images/img6.jpg" />
  </div>
</div>

</div>

</>
)
}

export default Carousel