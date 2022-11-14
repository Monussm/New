import React from "react";
import Footer from "./Footer";
import Mid from "./Mid";
import Secondb from "./Secondb";
import Third from "./Third";
const About =()=>
{
    return <>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 mt-5">
                <h1 className="us">About us</h1>
            </div>
            <Secondb src="../Image/hero1.jpg.webp"/>
            <Third />
            <Mid />
            <Third />
            <Footer />

        </div>

    </div>

     
    
    </>
}
export default About;