import React from 'react'
import Common from './Common'
import Review from './Review'
import web from '../src/image/about.jpg'

function About() {
  return <>
   <Common name="welcome to about page" imgsrc={web} visit='/contact' btnname="contact now" brandname="for more info"/>
  <Review/>
  </>
}

export default About