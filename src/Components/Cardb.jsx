import React from "react";
const Cardb=(props)=>
{
    return <>
    <div className="col-md-4 mt-3">
    <div className="card">
    <div className="card-body">
    <h5 className="card-text">{props.text}</h5>
     <img className="image"src={props.src2} alt={props.alt2}/>
    <p className="card-textp">{props.cardtext}</p>
  </div>
</div>
    </div>
    </>
}
export default Cardb;