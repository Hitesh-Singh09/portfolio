import React from 'react'
import "./Footer.css"
import MediaIcons from '../Social-media/MediaIcons'
import { MdEmail } from 'react-icons/md'


const Footer = () => {
  return (
    <>
    <div className="footer">
    
    <div className="footer-upper">
    <h2>" Lets Work Together and I Will <br/> Help You By My Best. "</h2>
    </div>
    <div className="footer-lower">
    <MediaIcons style={{margin:"0rem"}}/>
    <h2><MdEmail/> hiteshsingh5448@gmail.com</h2>
    
    
    <hr className='lines'/>
 
    <h2>HITESH SINGH © 2023. ALL RIGHTS RESERVED.</h2>
    </div>
    
    </div>

    
    </>
  )
}

export default Footer
