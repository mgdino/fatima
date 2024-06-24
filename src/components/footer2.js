import { Link } from 'react-router-dom';
import fb from '../pages/pics/fb_icon.png';
import logo from '../pages/pics/logo.png';

function Footer2(){
    return <footer id='footer2'>
        <div id="footer-container1">
            <div className='fb'>
            <a href="https://web.facebook.com/FatimaCenterForHumanDevelopment" target="_blank">
            <i className="fa fa-facebook-square"></i>
            <p>facebook.com/FatimaCenterForHumanDevelopment</p>
            </a>
            </div>
            <div className='email'>
            <a href="mailto:fatima_center@yahoo.com">
            <i className='fas fa-envelope'> </i>
            <p>fatima_center@yahoo.com</p>
            </a>
            </div>
        </div>
        <div id="footer-container2">
        <ul>
        <li><Link to="/what-we-do">What We Do</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/donate">Donate</Link></li>
            
        </ul>
        </div>
  </footer>
}

export default Footer2