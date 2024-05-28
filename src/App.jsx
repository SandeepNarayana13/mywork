import React, { useState } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import {Header, Courses, Footer, Testimonials, Navbar, Title, About, Footer2} from './components'



const App = () =>{
  return (
    <>
    
    <Navbar/>
    <Header/>
    <div className='container'>
      <Title subTitle='Our Courses' title='What We Offer'/>
      <Courses/>
      <Title subTitle='about us' title=' SALS '/>
      <About/>
      <Title subTitle='TESTIMONIALS' title='What Students Says'/>
      <Testimonials/>
    <Title subTitle='Contact Us' title='Get in touch'/>
    <Footer/>
    <Footer2/>    
    </div>
    </>

  );

};

export default App;
