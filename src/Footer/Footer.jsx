import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import shopping from './shopping.png';


export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={shopping} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
        <FaInstagram />
        </div>
        <div className="footer-icon-container">
        <FaPinterest />
        </div>
        <div className="footer-icon-container">
        <FaWhatsapp />
        </div>
      </div>
      <div className="footer-copy-right">
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}
