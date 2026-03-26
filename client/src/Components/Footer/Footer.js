import "./Footer.css"
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-ul-list">
                <ul className="footer-ul-list">
                    <li><Link className="footer-link" to="/">Home</Link></li>
                    <li><Link className="footer-link" to="/about">About</Link></li>
                    <li><Link className="footer-link" to="/contact">Contact</Link></li>
                </ul>

            </div>
            <div className="social-icons-container">
                <div className="social-icon">
                    <IoLogoInstagram />
                </div>
                <div className="social-icon">
                    <IoLogoLinkedin />
                </div>
                <div className="social-icon">
                    <IoLogoTwitter />
                </div>

            </div>
            <div className="copyright">
                <p>© 2026 BuyerForeSight. All rights reserved.</p>
            </div>

            
        </div>
    )
}

export default Footer