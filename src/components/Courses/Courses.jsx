import React from 'react';
import './Courses.css';
import IBPS from '../../Assets/IBPS.png'
import RRB from '../../Assets/RRB-LOGO.jpg';
import UPSC from '../../Assets/UPSC logo.jpg';
import SSC  from '../../Assets/SSC.jpg';
import SALS_LOGO from '../../Assets/sals logo.png'
import RRB_PDF from '../../Assets/RRB.pdf';
import UPSC_PDF from '../../Assets/UPSC.pdf';
import IBPS_PDF from '../../Assets/IBPS.pdf';
import SSC_PDF from '../../Assets/SSC.pdf';
const Courses = () => {
  return(
    <div className='courses'>
      <div className='course'>
        <img src={UPSC} alt="UPSC course details" />
        <div className='caption'>
          <img src={SALS_LOGO} alt="" />
        </div>
          <p className='text'>
          <a href={UPSC_PDF} target="_blank" rel="noopener noreferrer">🚀 Explore UPSC Course </a>
            </p>
      </div>


      <div className='course'>
        <img src={RRB} alt="RRB course details" />
        <div className='caption'>
          <img src={SALS_LOGO} alt="" />
        </div>
          <p className='text '> 
          <a href={RRB_PDF} target="_blank" rel="noopener noreferrer">🚂 Journey through RRB Course</a>
           </p>
      </div>

      <div className='course'>
        <img src={IBPS} alt="IBPS course details" />
        <div className='caption'>
          <img src={SALS_LOGO} alt="" />
        </div>
          <p className='text'>
          <a href={IBPS_PDF} target="_blank" rel="noopener noreferrer">🎖️ Dive into IBPS Course</a>
            </p>
      </div>


      <div className='course'>
        <img src={SSC} alt="SSC CGL course details" />
        <div className='caption'>
          <img src={SALS_LOGO} alt="" />
        </div>
          <p className='text'>
          <a href={SSC_PDF} target="_blank" rel="noopener noreferrer"> Explore SSC CGL Course</a>
            </p>
      </div>
    </div>
  );
};


export default Courses;
