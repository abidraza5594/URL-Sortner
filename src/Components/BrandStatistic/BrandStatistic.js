import React from 'react'
import "./brandstatistic.css"
import BoostImg from "../../images/bg-boost-desktop.svg"
const BrandStatistic = () => {
    return (
        <div className="bransstatistic_container">
            <div className="lines"></div>
            <div className="headercontainer">
                <h1>Avanced Statistics</h1>
                <div className='headercontainer'>
                    <p>Track how your links are performinfacross the web with our</p>
                    <p>advanced statistics dashboard.</p>
                </div>
            </div>
            <div className="allbrands">

                <div className='cart cart1'>
                    <div className="roundimg rimg1">
                        <img src="https://luminous-raindrop-ee7b2a.netlify.app/static/media/icon-brand-recognition.c349d3b6.svg" alt="" />
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links helps instill a confidence in your content.</p>
                </div>

                <div className='cart cart2'>
                    <div className="roundimg rimg2">
                        <img src="https://luminous-raindrop-ee7b2a.netlify.app/static/media/icon-detailed-records.265c8aea.svg" alt="" />
                    </div>
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content and helps inform better decisions.</p>
                </div>

                <div className='cart cart3'>
                    <div className="roundimg rimg3">
                        <img src="https://luminous-raindrop-ee7b2a.netlify.app/static/media/icon-fully-customizable.a1532a74.svg" alt="" />
                    </div>
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through custom links, supercharging audience engagement.</p>
                </div>
            </div>
            <div className="boostcarrier">
                <img src={BoostImg} alt="" />
                <div className="boost_inner">
                    <h1>Boost your links today.</h1>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default BrandStatistic