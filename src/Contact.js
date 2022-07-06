import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faLocationDot } from '@fortawesome/free-solid-svg-icons'
import{faPhone} from '@fortawesome/free-solid-svg-icons'
import{faAt} from '@fortawesome/free-solid-svg-icons'
function Contact() {
  return<>
 
  <section className='contact anim'>
    <div className='content'>
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sit repellendus doloribus, odit voluptates corporis perspiciatis cupiditate aut assumenda, dolore facilis dolorum nihil deleniti. Reiciendis ipsum eius architecto impedit?</p>
    </div>
    <div className='conteiner anim'>
      <div className='contactInfo'>
          <div className='box'>
            <div className='icon'> <FontAwesomeIcon icon={faLocationDot} /></div>
            <div className='text'>
              <h3>Address</h3>
              <p>house number 91/c1, road number 7/a, <br /> dhanmondi , dhaka </p>
            </div>
          </div>
        <div className='box'>
              <div className='icon'> <FontAwesomeIcon icon={faPhone} /></div>
              <div className='text'>
             
                <h3>Phone</h3>
                <p>01775970162</p>
              </div>
          </div>
          <div className='box'>
              <div className='icon'>   <FontAwesomeIcon icon={faAt} /> </div>
              <div className='text'>
            
                <h3>Email</h3>
                <p>pritomsaha24.ps@gmail.com</p>
              </div>
          </div>
      </div>
      <div className='contactForm'>
          <form>
            <h2>send message</h2>
            <div className='inputBox'>
              <input type="text" name='' required="required" />
              <span>Full Name</span>
            </div>
          <div className='inputBox'>
            <input type="text" name='' required="required" />
            <span>Email</span>
          </div>
          <div className='inputBox'>
            <textarea required='required'></textarea>
            <span>Type your message....</span>
          </div>
           <div className='inputBox'>
           <input type="submit" value='send' />
          </div>
          </form>
      </div>
    </div>

  </section>
  </>
}

export default Contact