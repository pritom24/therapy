import React from 'react'
import{ } from '@fortawesome/free-solid-svg-icons'
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return <>
  <footer className='footer'>
    <div className='footerContainer'>
        <div className='footerRow'>
            <div className='footer-col'>
                <h4>Company</h4>
                <ul>
                    <li><a href="">about</a></li>
                    <li><a href="">services</a></li>
                    <li><a href="">privacy policy</a></li>
                   
                </ul>
            </div>
        <div className='footer-col'>
            <h4>get help</h4>
            <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">order status</a></li>
                <li><a href="">payemnt options</a></li>
            </ul>
        </div>
        <div className='footer-col'>
            <h4>Follow Us</h4>
            <div className='social-links'>
                <a href=""><FaFacebook/></a>
                <a href=""><FaInstagram/></a>
                <a href=""><FaGithub/></a>
                <a href=""><FaLinkedin/></a>
            </div>
        </div>
     
    
        </div>
    </div>
  </footer>
  </>
}

export default Footer