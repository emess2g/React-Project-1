
import React from 'react'
import Navbar from './components/homePage/navbar/Navbar'
import Hero from './components/homePage/hero/Hero'
import Stat from './components/homePage/stats/Stat'
import VideoLessons from './components/homePage/videolessons/VideoLessons'
import DownloadApp from './components/homePage/downloadApp/DownloadApp'
import PopularCourses from './components/homePage/popularCourses/PopularCourses'
import Student from './components/homePage/students/Student'
import Footer from './components/homePage/footer/Footer'





function App() {
  return (
    <div>
       <Navbar />
       <Hero />
       <Stat />
       <VideoLessons />
       <DownloadApp />
       <PopularCourses />
       <Student />
       <Footer />


    </div>
  )
}

export default App