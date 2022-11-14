import React from "react";
import Email from "./Email";
import Head from "./Head";
const Footerb=(props)=>
{
    return <>
    <div className="col-md-2 mt-2">
        <img className="pn" src={props.foo} alt={props.foo}/>
    </div>
    <div className="col-md-2 mt-2">
      <h6>{props.fooh}</h6>
      <ul>
      <li>Work</li>
      <li>Services</li>
      <li>Services</li>
      <li>Tips & Tricks</li>
      </ul>
    </div>
    <div className="col-md-2 mt-2">
      <h6>{props.fooh2}</h6>
      <ul>
      <li>Work</li>
      <li>Services</li>
      <li>Services</li>
      <li>Tips & Tricks</li>
      </ul>
    </div>
    <div className="col-md-6 mt-2">
        <span>{props.pan}</span>
        <p className="ac">{props.get}</p>
        <Email />
    </div>
    </>
}
export default Footerb;