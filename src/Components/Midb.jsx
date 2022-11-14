import React from "react";
const Midb=(props)=>
{
    return <>
    <div className="col-md-2  mx-auto mt-4">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={props.carsrc}alt={props.caralt}/>
    </div>
    <div class="carousel-item">
    <img src={props.carsrc3}alt={props.caralt3}/>
    </div>
    <div class="carousel-item">
      <img src={props.carsrc2}alt={props.caralt2}/>
    </div>
    <div class="carousel-item">
    <img src={props.carsrc3}alt={props.caralt3}/>
    </div>
    <div class="carousel-item">
    <img src={props.carsrc4}alt={props.caralt4}/>
    </div>
    <div class="carousel-item">
      <img src={props.carsrc2}alt={props.caralt2}/>
    </div>
  </div>
</div>

    </div>
    </>
}
export default Midb;