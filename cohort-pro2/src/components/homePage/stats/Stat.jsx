import React from 'react'
import './stat.css'
import TeacherImg from './statImg/male-teacher.png'
import StudentsImg from './statImg/male-student.jpg'
import VideoImg from './statImg/video-camera-icon.jpg'

function Stat() {
  return (
    <section className='stat-section '>
    <div className="stat-container row df">
           <div className="sc1 df">
              <img className='sc1-img' src={TeacherImg} alt="" />
              <p>20+ <br />Teachers </p>
           </div>
           <hr />
           <div className="sc1 df">
              <img className='sc1-img' src={StudentsImg} alt="" />
              <p>1000+ <br />Students </p>
           </div>
           <hr />
           <div className="sc1 df">
              <img className='sc1-img' src={VideoImg} alt="" />
              <p>100+ <br />Videos </p>
           </div>
    </div>
    </section>
  )
}

export default Stat