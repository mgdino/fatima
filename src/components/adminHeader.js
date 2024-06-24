import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from '../pages/pics/logo.png';
import v100 from '../pages/pics/vectors/vector100.png';

var sb
var sbg

var gi
var hp
var wwd
var ofr
var au

function showSideBar(){
  sb = document.getElementById("admin-nav")
  console.log("gggg");
  sb.classList.add("active")
  sbg.classList.add("active")
}
function toTop(){
  window.scrollTo(0,0)
}
function toHomepage(){
  const s = document.getElementById("homepage")
  // window.scrollTo({
  //   top: s.getBoundingClientRect().top - 20,
  //   left: 0,
  //   behavior: "auto",
  // });

  setTimeout(() => {
  s.scrollIntoView({
        behavior: "smooth",
        // block: "center",
        inline: "center"
    });
}, 0);

console.log(window.innerWidth);

// if(window.innerWidth < 1200){
//   window.scrollBy(0, -200)
// }

hideSideBar();
  // window.scrollTo(0, s.getBoundingClientRect().top - 20)
}

function toGenInfo(){
  // window.scrollTo(0, 0)
  const s = document.getElementById("gen-info")
  setTimeout(() => {
    s.scrollIntoView({
          behavior: "smooth",
          // block: "center",
          inline: "center"
      });

  }, 0);


  hideSideBar();
}

function toOffers(){
  const s = document.getElementById("offers")
  setTimeout(() => {
    s.scrollIntoView({
          behavior: "smooth",
          // block: "center",
          inline: "center"
      });
  }, 0);

  hideSideBar();
  // window.scrollBy(0, -200)
}

function toWhatWeDo(){
  const s = document.getElementById("what-we-do")
  setTimeout(() => {
    s.scrollIntoView({
          behavior: "smooth",
          // block: "center",
          inline: "center"
      });
  }, 0);
  // if(window.innerWidth < 1200){
  //   window.scrollBy(0, -200)
  // }
  hideSideBar();
}

function toAboutUs(){
  const s = document.getElementById("about-us")
  setTimeout(() => {
    s.scrollIntoView({
          behavior: "smooth",
          // block: "center",
          inline: "center"
      });
  }, 0);
  // window.scrollBy(0, -200)
  hideSideBar();
}

function hideSideBar(){
  sb.classList.remove("active")
  sbg.classList.remove("active")
}

function AdminHeader(props){

  useEffect(()=>{
    sb = document.getElementById("admin-nav")
    sbg = document.getElementById("sidebar-menu-bg")

  }, [])

    return  <>
      <div id="sidebar-menu-bg" onClick={hideSideBar}>

      </div>

      
    <div id="admin-nav">
      <Link to="/" id="logo-fatima">
          <img src={logo} style={{height:'37px', width:"37px" }}></img>
          <h1 >FATIMA </h1> 
          </Link>
          <ul>
            <li><p>WEBSITE CONTENT</p></li>
            <li>
              <Link to="#" onClick={toGenInfo}>
                Gen Info
              </Link>
             </li>
             <li>
              <Link to="#" onClick={toHomepage}>
                Homepage
              </Link>
             </li>
             <li>
              <Link to="#what-we-do" onClick={toWhatWeDo}>
                What we do
              </Link>
             </li>
             <li>
              <Link to="#offers" onClick={toOffers}>
                Offers
              </Link>
             </li>
             <li>
              <Link to="#about-us" onClick={toAboutUs}>
                About Us
              </Link>
             </li>
             {/* <li><p>CONTACT DEVELOPERS</p></li> */}
             <li><p><Link id="logout" to="/admin-login" onClick={() => {props.setAuthenticated(false)}}>
                Log Out
              </Link></p></li>
          </ul>


  </div>
    <header id="header2" style={{display: "none"}}>
      <div className='container'>
      <div id="nav-container">
      <button id="nav-mobile" onClick={showSideBar}>
      {/* <i className="fa fa-bars fa-6"></i> */}
      <img src={v100} />
    </button>
    <Link to="/admin" id="logo-fatima" onClick={toTop}>
          <img src={logo} style={{height:'5vh', width:"5vh" }}></img>
          <h1 >Admin</h1> 
          </Link>
      </div>



      </div>
          

  </header>
    </>
}
export default AdminHeader