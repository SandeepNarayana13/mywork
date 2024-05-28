import React from 'react'
import './Footer.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'

const Footer = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f5c3d35-130c-489b-a3aa-b744f39f5973");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon}/></h3>
        <p>
          Feel free to reach out through contact form or find our contact information below. Your feedback , questions and suggestions are important to us as we strive to provide exceptional service to our aspirants.
        </p>
        <ul>
          <li><img src={mail_icon}/>Contanct@Sals.in</li>
          <li><img src={phone_icon}/>+91 6300025878</li>
          <li><img src={location_icon}/>chennai, Tamil Nadu, IND.</li>
        </ul>
      </div>

      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label> Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your Phone number' required/>
          <label>Write your message here</label>
          <textarea name="message" id="" rows='6' placeholder='Enter your message' required></textarea>
          <button type="submit" className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Footer


// import React from 'react';
// import './Footer.css'; 
// import fb from '../../Assets/fb_logo.png'

// import "./Footer.css";
// const Footer = () => {
//   return (
//     <footer className="new_footer_area bg_color">
//       <div className="new_footer_top">
//         <div className="container">
//           {/* Container for horizontal sections */}
//           <div className="row footer_sections">
//             {/* Get in Touch Section */}
//             <div className="col-lg-3 col-md-6">
//               <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
//                 <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
//                 <p>Don’t miss any updates of our new templates and extensions.!</p>
//                 <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate>
//                   <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
//                   <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
//                   <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
//                   <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
//                 </form>
//               </div>
//             </div>
//             {/* Download Section */}
//             <div className="col-lg-3 col-md-6">
//               <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
//                 <h3 className="f-title f_600 t_color f_size_18">Download</h3>
//                 <ul className="list-unstyled f_list">
//                   <li><a href="#">Company</a></li>
//                   <li><a href="#">Android App</a></li>
//                   <li><a href="#">iOS App</a></li>
//                   <li><a href="#">Desktop</a></li>
//                   <li><a href="#">Projects</a></li>
//                   <li><a href="#">My tasks</a></li>
//                 </ul>
//               </div>
//             </div>
//             {/* Help Section */}
//             <div className="col-lg-3 col-md-6">
//               <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
//                 <h3 className="f-title f_600 t_color f_size_18">Help</h3>
//                 <ul className="list-unstyled f_list">
//                   <li><a href="#">FAQ</a></li>
//                   <li><a href="#">Term & conditions</a></li>
//                   <li><a href="#">Reporting</a></li>
//                   <li><a href="#">Documentation</a></li>
//                   <li><a href="#">Support Policy</a></li>
//                   <li><a href="#">Privacy</a></li>
//                 </ul>
//               </div>
//             </div>
//             {/* Team Solutions Section */}
//             <div className="col-lg-3 col-md-6">
//               <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
//                 <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
//                 <div className="f_social_icon">
//                   <a href="#" className="fab fa-facebook"></a>
//                   <a href="#" className="fab fa-twitter"></a>
//                   <a href="#" className="fab fa-linkedin"></a>
//                   <a href="#" className="fab fa-pinterest"></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="footer_bg">
//           <div className="footer_bg_one"></div>
//           <div className="footer_bg_two"></div>
//         </div>
//       </div>
//       {/* Footer Bottom Section */}
//       <div className="footer_bottom">
//         <div className="container">
//           <div className="row align-items-center">
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer