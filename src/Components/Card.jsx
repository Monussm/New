import React from "react";
import Head from "./Head";
import Cardb from "./Cardb";
const Card=()=>
{
    return <>
    <div className="container">
    <Head head="Olla helps you to spruk your product's features."/>
    <p className="para">Combine sections from Olla's vast component library and create beautiful.</p>
        <div className="row">

            <Cardb  text="Unlimited Components" src2="../Image/services1.jpg" 
            cardtext="Combine sections from Olla's vast component library"/>

            <Cardb  text="Awesome Support" src2="../Image/services2.jpg" 
            cardtext="Combine sections from Olla's vast component library"/>

            <Cardb text="Responsive Design" src2="../Image/services3.jpg" 
            cardtext="Combine sections from Olla's vast component library"/>
        </div>

    </div>

    </>
}
export default Card;