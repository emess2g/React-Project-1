import React from 'react'
import './hero.css'
import HeroImg from './heroImg/hero-img.png'

function Hero() {
  return (
    <header className='row'>
           <div className="hero-container df">
                 <article className="h-content">
                    <h2 className="h-title title">
                        <span className="title-span">emess,</span>
                        the origin of <br /> elites learn from  the <br /> best, succeed like the best
                    </h2>
                    <p className="h-details details">
                        education is the key to unlocking <br /> individual potential and fostering societal progress
                    </p>

                    <div className="h-buttons-container df">
                            <button className=''>Get Started</button>

                            <button className='df'>
                            <i className="fa-solid fa-circle-play" ></i>
                            Watch Videos
                            </button>

                           <button className='df'>
                            <i className="fa-solid fa-download"></i>
                            Downloads
                            </button>
                    </div>
                 </article>

                 <div className="h-img-container df">
                    <img className='h-img' src={HeroImg} alt="" />
                 </div>
           </div>
    </header>
  )
}

export default Hero