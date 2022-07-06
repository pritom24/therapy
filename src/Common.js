import React from 'react'
import { NavLink } from 'react-router-dom'


function common(props) {
  return <>
  <section id='header' className='d-flex align-items-center'>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-10 mx-auto'>
        <div className='row'>
        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column flex-column'>
            <h1 className='anim'> {props.name} <strong className={`${props.brandname==="Primex"?"brand-name anim": "about-brand-name anim"}`}>{props.brandname}</strong></h1>
            <h2 className='my-3 anim'>
                We are the team of talented developer
            </h2>
            <div className='mt-3'>
            <NavLink to={props.visit} className={`${props.btnname==='Get Started'? "btn-get-started anim": "btn-contact-us anim"}`}>{props.btnname}</NavLink>     
          </div>
        </div>
        <div className='col-lg-6 order-1 order-lg-2 header-img'>
            <img src={props.imgsrc} className='image-fluid animator' alt="home image" />
        </div>
        </div>
      </div> 
    </div>
  </div>
  </section>
  </>
}

export default common