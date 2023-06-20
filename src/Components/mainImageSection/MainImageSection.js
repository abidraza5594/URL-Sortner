import React from 'react'
import "./mainimagesection.css"
const MainImageSection = () => {
  return (
    <div className='mainimagesection'>
        <div className="mainimageinnersection">
            <div className="lefmainimagesection">
                <h1>More than just</h1>
                <h1>shorter links</h1>
                <div className='para'>
                    <p>Build you brands recognition and get detailed </p>
                    <p>insights on how your links are performing.</p>
                </div>
                <button>Get Started</button>
            </div>
            <img id='mainsvg' src="https://luminous-raindrop-ee7b2a.netlify.app/static/media/illustration-working.c9b5ef54.svg" alt="" />
        </div>
    </div>
  )
}

export default MainImageSection