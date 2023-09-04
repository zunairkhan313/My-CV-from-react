import React from "react";
import img from '../img/phone.png'
import './phone.css';

function Phone(){
    return(
        <div>
           
           <img className="Reaponsive phone" src={img} alt="" height={25} width={35} />
        </div>
    )
}
export default Phone