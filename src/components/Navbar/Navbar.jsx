import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../Assets/sals logo.png"
import { Link } from 'react-scroll' ;
import menu_icon from '../../Assets/menu-icon.png';
// import signin from '../signin/signin';
// import { Link } from 'react-router-dom';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 250 ? setSticky(true) : setSticky(false)
    });
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'light-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu? '':'hide_mobile_menu'}>
        <li><Link to='header' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About Us</Link></li>
        <li><Link to='courses' smooth={true} offset={-260} duration={500}>Courses</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='footer' smooth={true} offset={-750} duration={500}>Contact Us</Link></li>


        <li><a href="/signin.html"><button className='btn'>Sign Up</button></a></li>
        <nav>
      
    </nav>
        
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar;