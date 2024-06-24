import { Link } from "react-router-dom"
import logo from '../pages/pics/logo.png';

function Header1(){
    return  <header id="header1">
      <div className='container'>
      <Link to="/" id="logo-fatima">
          <img src={logo} style={{height:'8vh', width:"8vh" }}></img>
          <h1 >FATIMA </h1> 
          </Link>
          <ul>

             <li>
              <Link to="/what-we-do">
                What we do
              </Link>
             </li>
             <li>
              <Link to="/offers">
                Offers
              </Link>
             </li>
             <li>
              <Link to="/about-us">
                About Us
              </Link>
             </li>
             <li>
              <Link to="/donate" id="donate-link">
                Donate
              </Link>
             </li>
          </ul>

      </div>
          

  </header>
}
export default Header1