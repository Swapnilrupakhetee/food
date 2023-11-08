import React from 'react'
import aboutImage from './banner.png'

function About() {
  return (
    <div id='about'>
      <div className='about-text'>
        <h1>Upcoming Reveals</h1>
        <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Cumque veritatis in totam voluptates porro ratione?</p>
      </div>
      <div className='about-image'>
        <img src={aboutImage} alt=''/>

      </div>

    </div>
  )
}

export default About