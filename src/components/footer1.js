import fb from '../pages/pics/fb_icon.png';
import logo from '../pages/pics/logo.png';

function Footer1(){
    return <footer id='footer1'>
        <div className="footer-container">
        <div className='footer-socmed'>
        <h2>Follow us</h2>

        <a href="https://web.facebook.com/FatimaCenterForHumanDevelopment" target="_blank">
            <img src={fb} height="50px" width="50px" ></img>
        </a>
        </div>

        <div className='footer-contact'>
            <h2>Contact Us!</h2>
            <p>Email: <a href="mailto:mabethcatina@gmail.com">mabethcatina@gmail.com</a></p>
            <p>Contact Number: <a href="tel:+639380830733">+63(938) 083-0733</a></p>
        </div>

        </div>
            <p>©2023 The Foundation of Our Lady Fatima </p>
  </footer>
}

export default Footer1