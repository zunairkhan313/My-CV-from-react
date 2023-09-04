import React from "react";
import img from '../img/zuanir.jpg'
import "./image.css"
function Image(){
    return(
        <div>
            <img className="Reaponsive" src={img} alt="" height={150} width={140} />
        </div>
    )
}
export default Image