import React, { useEffect, useRef } from 'react'
import { ReactTyped } from "react-typed";
import emailjs from '@emailjs/browser';

const Footer = () => {
    const NigarinYaratdigiForm= useRef()
    
    const mesajiGonder = function(e){
e.preventDefault
emailjs
.sendForm('ryNz3ijZZY66kWFf0', 'template_tly3b6v', NigarinYaratdigiForm.current, {
  publicKey: 'ryNz3ijZZY66kWFf0',
})
.then(
  () => {
    console.log('SUCCESS!');
  },
  (error) => {
    console.log('FAILED...', error.text);
  },
);
    }
  return (
    <div>
        <div className="footer">
            <div className="row">
                <div className="left-footer">
                    <p className='ms-4 mt-5'>Join our newsletter to stay up to date on features and releases.</p>
  
                 
                 
                 
                 
                 
                 
                 
                   
    <div className="container d-flex col-12 col-md-6 ms-1 ">
        <form  onSubmit={mesajiGonder}  className="" ref={NigarinYaratdigiForm}>
            <div className="form ms-1 ">
                <input className='' type="textarea" placeholder=' name '  />
                <button  className="btn-second btn-outline text-white mb-2 mb-sm-0" type="submit">Subscribe</button>
                
                
            </div>
            
        </form>
 
        <div className="pages d-flex mx-1">
    <div className=" col-12 col-md-6 xs-3">
    <p>Pages</p>
    <p>Home</p>
    <p>About</p>
    <p>Contact</p>
    <p>Blog</p>
    <p>FAQs</p>

 </div>
 <div className=" col-12 col-md-6 xs-3">
    <p>SMS Pages</p>
    <p>Blog post</p>
    <p>Blog Categories</p>
    <p>Product page</p>
    <p>Product Categories</p>

    </div>
    <div className=" col-12 col-md-6 xs-3">
    <p>Account Pages</p>
    <p>Login</p>
    <p>Sign Up</p>
    <p>Forgot password</p>
    <p>Reset Password</p>
    <p>Email Confirmation</p>

    </div>

    <div className=" col-12 col-md-6 xs-3">
    <p>Utility Pages</p>
    <p>Style Guide</p>
    <p>Changelog</p>
    <p>Licenses</p>
    <p>404</p>
    <p>password</p>

    </div>
    </div>
   
 </div>
 <div className="contact-section d-flex">
 <p className='ms-4'>© Beautico by Minimal Square. Powered by Webflow</p>
 <img className=' linst' src="./assets/icons/facebook.svg" alt="" />
 <img className='inst' src="./assets/icons/instagram.svg" alt="" />
 <img className='inst' src="./assets/icons/twitter.svg" alt="" />
 </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Footer