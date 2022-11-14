import React from "react";
import Footerb from "./Footerb";
const Footer=()=>
{
    return <>
    <div className="container olla">
        <div className="row ">
            <div className="col-md-8 mt-5">
                <h1>Create your amazing website with Olla</h1>
                <p className="ac">Facilisis ac eget mauris nulla enim a diam posuere vel eleifend augue.</p>
            </div>
            <div className="col-md-4 mt-5">
            <form className="d-flex">
        <button className="btn trees" type="submit">Start Free Trial</button>
      </form>
            </div>
      <hr/>
        </div>
        <div className="row">
            <Footerb foo="../Image/logo.png.webp"
             fooh=" Quick Links" fooh2="Support" pan="Newsletter" get="Subscribe newsletter to get updates.."/>
        </div>
    <hr />
    <p className="paras">Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
    </div>
    </>
}
export default Footer;