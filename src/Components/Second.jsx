import React from "react";
import Secondb from "./Secondb"
import Email from "./Email";
import Heading from "./Heading";
const Second=()=>
{
    return <>
    <div className="container">
            <div className="row">
            <div className="col-md-6 solution">
            <span className="ness">A complete business solution</span>
            <Heading heading="Build your website in record time."/>
            <p  className="para">Combine sections from Olla's vast component library and create beautiful</p>
            <Email />
            </div>
            <Secondb src="./Image/Image.webp"/>
        </div>
    </div>
    
    </>
}
export default Second;