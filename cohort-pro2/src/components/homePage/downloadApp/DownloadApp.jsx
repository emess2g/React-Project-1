import React from 'react'
import './downloadApp.css'
import downloadImg from './AppImg/Screenshot.png'
import appleImg from './AppImg/download.png'
import googlePlayImg from './AppImg/download2.png'

function DownloadApp() {
  return (
    <section>
        <div className="d-container df row">
            <article className="d-content-container">
                <h2 className="d-title">
                    Knowledge is portable - carry it with you and share it wherever you go.
                </h2>
                <p className="d-details">
                    Don't wait for the right time or place to learn; seize <br />
                    every moment as an opportunity to expand your knowledge. <br />
                    Here is <span className="title-span">IOS</span> and  <span className="title-span">ANDRIOD</span> version. Download it now:
                </p>

                <div className="downloads-btn-container df">
                    <img src={appleImg} alt="" />
                    <img src={googlePlayImg} alt="" />
                </div>
            </article>
            <div className="d-img-container">
                <img src={downloadImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default DownloadApp