import React from 'react'
import './popularCourses.css'
import Course1 from './popularCoursesImg/course8.jpg'

function PopularCourses() {
  return (
    <section>
        <div className="courses-container row  dfc">
            <h1 className="c-title">Our Popular Courses</h1>

            <div className="c-cards-container df">
                <article className="course dfc">
                    <div className="course-img">
                    <img className='c-img' src={Course1} alt="" />
                    </div>
                    <div className="course-info">
                    <h4>Responsive Social Media UI Design</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit!
                     Lorem ipsum dolor sit, amet consectetur adipisicing  </p>
                    <button href="courses.html" className="btn">Learn more</button>
                    </div>
                    
                </article>

                <article className="course dfc">
                    <div className="course-img">
                    <img className='c-img' src={Course1} alt="" />
                    </div>
                    <div className="course-info">
                    <h4>Responsive Social Media UI Design</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit!
                     Lorem ipsum dolor sit, amet consectetur adipisicing  </p>
                    <button href="courses.html" className="btn">Learn more</button>
                    </div>
                    
                </article>

                <article className="course dfc">
                    <div className="course-img">
                    <img className='c-img' src={Course1} alt="" />
                    </div>
                    <div className="course-info">
                    <h4>Responsive Social Media UI Design</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit!
                     Lorem ipsum dolor sit, amet consectetur adipisicing  </p>
                    <button href="courses.html" className="btn">Learn more</button>
                    </div>
                    
                </article>
            </div>
         
        </div>
    </section>
  )
}

export default PopularCourses