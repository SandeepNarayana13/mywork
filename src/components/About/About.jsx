import React from 'react'
import './About.css';
import about_pic from '../../Assets/About-us.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_pic} alt="" className='about-img'/>
            <img src="" alt="" />
        </div>

        <div className='about-right'>
            <h3>Nuturing Tomorrow's Leaders Today</h3>
            <p>Innovative Learning for Everyone: At EduTech, we believe in democratizing education. Our platform offers a wide range of e-learning courses that are accessible to everyone, everywhere, at their own pace. Join us to expand your knowledge, acquire new skills, and become part of a global community of learners and educators.</p>

            <p>Empowering Through Education: LearnSphere is dedicated to empowering individuals through education. Our interactive courses are designed to cater to diverse learning needs, providing professional development, certification, and personal enrichment. Discover the joy of learning with our expertly crafted content and supportive community.</p>

        </div>
    </div>
  )
}

export default About