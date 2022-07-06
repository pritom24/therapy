import React from 'react'
import web  from '../src/image/service1.jpg'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
  return <>
 
          <div className='col-md-4 col-10 mx-auto'>
          <div className="card anim">
              <img src={props.imgsrc} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
       
  </>
}

export default Card