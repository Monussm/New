import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Secondb from "./Secondb";
import Third from "./Third";
const Service=()=>
{
    return<>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <h1 className="us">Services</h1>
            </div>
            <Secondb src="../Image/road.jpg"/>
            <Card />
            <Third />
            <Footer />
            </div>
            </div>
    </>
}
export default Service;