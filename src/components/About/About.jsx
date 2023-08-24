import React, { useEffect } from 'react'
import './About.css'
import Heading from '../Heading/Heading'
import HiteshSingh from "./HiteshSingh.pdf"

import MediaIcons from '../Social-media/MediaIcons'

import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
   return (
    <>
   <div className="about" id='about'>
  
  <div className="about-Header">
 <Heading  heading="Who i Am ?"/>
   
   
   </div>
   <div 
   data-aos="zoom-in-right"
    className="about-body">
   
   <div className="about-left">
   <h1>ABOUT ME</h1>
   <hr />
   <h1 data-aos="flip-up" data-aos-duration="800"  data-aos-delay="200">I'm <span>Hitesh Singh</span>, a Frontend developer.</h1>
 <p>I am a passionate web developer with a strong foundation in front-end and back-end technologies. With a keen eye for design and a love for problem-solving, I strive to create visually appealing and user-friendly websites. My expertise includes HTML, CSS, JavaScript, and various frameworks. I am dedicated to continuous learning, staying up-to-date with the latest trends and technologies in the industry.</p>
 <a href="#contact"> <button style={{marginTop:"3rem"}}className="color-button about-button">Contact Me</button></a>
 
 <MediaIcons/>
   
   </div>

   <div  className="about-right">
   <h2 data-aos="fade-left" data-aos-duration="700"  data-aos-delay="200"><span>Name: </span>Hitesh Singh</h2>
   <hr />
   
   <h2 data-aos="fade-left" data-aos-duration="700"  data-aos-delay="300"><span>Address: </span> Bilaspur, Chhattisgarh</h2>
   <hr />

   <h2 data-aos="fade-left" data-aos-duration="700"  data-aos-delay="400"><span>Email: </span>hiteshsingh5448@gmail.com</h2>
   <hr />
   <h2 data-aos="fade-left" data-aos-duration="700"  data-aos-delay="500"><span>Phone: </span>9009714785</h2>
   

   <a href={HiteshSingh} download> <button style={{margin:"3rem"}}className=" color-button about-button">Download CV</button></a>
   </div>
   
   </div>
   
   
 
   </div>
  
   
   </>
  )
}

export default About
