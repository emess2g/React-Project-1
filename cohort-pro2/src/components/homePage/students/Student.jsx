import React from 'react'
import './student.css'
import st0 from './studentImg/0.webp'
import st1 from './studentImg/1.webp'
import st2 from './studentImg/2.webp'
import st3 from './studentImg/3.webp'
import st4 from './studentImg/4.webp'
import st5 from './studentImg/5.webp'
import st6 from './studentImg/6.webp'
import st7 from './studentImg/7.webp'
import st8 from './studentImg/8.webp'
import st9 from './studentImg/9.webp'
import st10 from './studentImg/10.webp'
import st11 from './studentImg/11.webp'
import st12 from './studentImg/12.webp'
import st13 from './studentImg/13.webp'
import st14 from './studentImg/14.webp'
import st15 from './studentImg/17.webp'
import st16 from './studentImg/18.webp'
import st17 from './studentImg/19.webp'
import st18 from './studentImg/20.webp'
import st19 from './studentImg/21.webp'
import st20 from './studentImg/22.webp'
import st21 from './studentImg/23.webp'
import st22 from './studentImg/1.webp'

function Student() {
  return (
       <section className='student-sec row'>
        <h1>Native Students</h1>

        <div className="students n1  df">
            <img src={st0} alt="" className='img0' />
            <img src={st1} alt="" />
            <img src={st2} alt="" className='img0'/>
            <img src={st3} alt="" />
            <img src={st4} alt=""  className='img0' />
            <img src={st5} alt=""  />
           <img src={st2} alt=""   />
        </div>

        <div className="students  df n2">
          <img src={st20} alt="" />
            <img src={st7} alt=""  className='img0'/>
            <img src={st8} alt="" />
            <img src={st9} alt="" className='img0'  />
            <img src={st10} alt=""   />
            <img src={st11} alt="" />
            <img src={st12} alt=""  className='img0'/>
        
        </div>

        <div className="students n1 df ">
          <img src={st6} alt="" className='img0' />
            <img src={st13} alt="" />
            <img src={st14} alt=""  className='img0' />
            <img src={st15} alt=""  />
            <img src={st16} alt=""   className='img0'/>
            <img src={st17} alt=""  />
            <img src={st18} alt="" />
        
        </div>

        <div className="students  df n2">
            <img src={st21} alt="" />
            <img src={st1} alt=""  className='img0'/>
            <img src={st2} alt="" />
            <img src={st3} alt=""   className='img0'/>
            <img src={st4} alt="" />
            <img src={st18} alt="" />
           <img src={st22} alt=""   className='img0'/>
        </div>


       </section>
  )
}

export default Student