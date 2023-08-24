import React from 'react'
import "./MediaIcons.css"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";


const MediaIcons = () => {
  return (
    <>
    <div className="i-icons">
    <a href="https://www.linkedin.com/in/hitesh-singh-054a56215">
      <BsLinkedin
        className="react-icon"
        
      />
    </a>
    <a href="https://www.instagram.com/hitesh_00009?igshid=ZDdkNTZiNTM=">
      <BsInstagram
        className="react-icon"
        
      />
    </a>
    <a href="https://github.com/Hitesh-Singh09">
      <BsGithub className="react-icon"  />
    </a>
  </div>
    
    </>
  )
}

export default MediaIcons
