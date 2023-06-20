import React from 'react'
import "./inputbtn.css"
import BG_shorted_desktop from "../../images/bg-boost-desktop.svg"
import BG_shorted_Mobile from "../../images/bg-boost-mobile.svg"

const InputBtn = () => {
    return (
        <div className="inputbtn_container">
            <div className="inputbtn_inner">
                <img src={BG_shorted_desktop} alt="" />
                <div className="centerofimg">
                    <input type="text"  placeholder='Shorten a link here..'/>
                    <button>Shorten it!</button>
                </div>
            </div>
        </div>
    )
}

export default InputBtn