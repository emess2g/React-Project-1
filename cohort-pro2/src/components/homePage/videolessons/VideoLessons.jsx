import React from 'react'
import './videolesson.css'
import LessonsImg from './videolessonsImg/Related-work.png'

function VideoLessons() {
  return (
    <section className='v-section row '>
        <div className="v-container  df">
            <div className="v-img-container">
                 <img className='v-img' src={LessonsImg} alt="" />
            </div>
            <article className="v-content-container">
                <h2 className="v-title">
                    We provide many videos <br /> that you can watch and learn free
                </h2>
                <p className="v-details">
                    The beautiful thing about learning is that no one can <br /> it away from you 
                </p>

                <ul className='v-menu-list'>
                    <li>Watch videos without any cost </li>
                    <li>Save it in Playlist and watch later</li>
                    <li>Download the video content free</li>
                    <li>Video content for <span className="title-span">Kankor</span> Exam</li>
                    <li> <span className="title-span">Kankor MCQ</span> form practice video</li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default VideoLessons