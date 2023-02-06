import React from 'react'
import './crousel.css'

function Crousel() {
      
  return (
    <div>
  <div id="myCarousel" class="carousel slide" data-ride="false">
 
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src="https://i.ibb.co/wJPW6Dz/carousalimage1.jpg" alt="Image 1" id='crousel-images'/>
      
    </div>
    <div class="carousel-item" >
      <img src="https://i.ibb.co/NxqVq1q/carousalimage2.jpg" alt="Image 2" id='crousel-images'/>
      
    </div>
    <div class="carousel-item" >
      <img src="https://i.ibb.co/J5QMk8J/carousalimage3.jpg" alt="Image 3" id='crousel-images'/>
      
    </div>
  </div>

 
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>
  )
}

export default Crousel