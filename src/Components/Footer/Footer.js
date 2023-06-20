import React from 'react'
import './footer.css'
import Logo from "../../images/logo.svg"
import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"
import pintrest from "../../images/icon-pinterest.svg"
import instragrame from "../../images/icon-instagram.svg"
const Footer = () => {
  return (
    <div className="footercontainer">
        <img id='flogo'  src={Logo} alt="" />
        <div className="footer_inner foineer1">
            <h3>Features</h3>
            <h4>Link Shortening</h4>
            <h4>Branded Links</h4>
            <h4>Analytics</h4>
        </div>
        <div className="footer_inner foineer2">
        <h3>Resources</h3>
            <h4>Blog</h4>
            <h4>Developers</h4>
            <h4>Support</h4>
        </div>
        <div className="footer_inner foineer3">
        <h3>Company</h3>
            <h4>About</h4>
            <h4>Our Team</h4>
            <h4>Careers</h4>
            <h4>Contact</h4>
        </div>
        <div className="footer_inne foineer4">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pintrest} alt="" />
          <img src={instragrame} alt="" />
        </div>
    </div>
  )
}

export default Footer