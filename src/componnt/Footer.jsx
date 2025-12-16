



import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav >
    <h6 className="footer-title ">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
     
      <IoLogoYoutube className='text-3xl'/>
      <FaTwitter  className='text-3xl'/>
      <FaFacebook className='text-3xl'/>
      <FaInstagramSquare className='text-3xl'/>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;