import React from "react";
import Secondb from "./Secondb";
import Map from "./Map";
import Form from "./Form";
import Footer from "./Footer";
const Contact=()=>
{
    return <>
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 mt-5">
                <h1 className="us">About us</h1>
            </div>
            <Secondb src="../Image/hero1.jpg.webp"/>
        </div>
        <Map />
        <Form />
        <Footer />
    </div>
    </>
}
export default Contact;