import React from "react";
import Midb from "./Midb";
const Mid=()=>
{
    return <>
    <div className="container mt-5 bg-dark text-light">
        <div className="row">
            <h2 className="good mt-2">You'll be in good company.</h2>
            <p className="para">
            A powerful suite of features to help you build fast and functional layouts. Olla is perfect
             for building websites of almost any kind.
            </p>
            <div className="col-md">
            <form className="d-flex">
        <button className="btn tree mx-auto" type="submit">Meet our customers</button>
      </form>
            <Midb carsrc="../Image/brand1.png.webp"
            carsrc2="../Image/brand2.png.webp"
             carsrc3="../Image/brand3.png.webp"
             carsrc4="../Image/brand4.png.webp"
             />

            </div>
        </div>

    </div>
    
    </>
}
export default Mid;