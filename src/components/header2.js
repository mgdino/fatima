import { Link, Navigate, useNavigate } from "react-router-dom"
import logo from '../pages/pics/logo.png';
import { useEffect, useState } from "react"
import v100 from '../pages/pics/vectors/vector100.png';
var sb
var sbg



function showSideBar(){
  sb.classList.add("active")
  sbg.classList.add("active")
}

function hideSideBar(){
  sb.classList.remove("active")
  sbg.classList.remove("active")
}

function Header2(props){
  const navigate = useNavigate();
  const handleClick = () => {
    let cp = document.getElementById("cart-panel")
    cp.classList.remove("active")
    navigate('/checkout')
  };

  function removeProduct(e){
    let source = e.target.id
    var index = 0
    props.cart.forEach(el => {
      if(el.name === source){
        var cart2 = props.cart

        cart2.splice(index,1)
        props.setCart([...cart2])
      }
      index += 1
      
    });
  }

  useEffect(()=>{
    sb = document.getElementById("sidebar-menu")
    sbg = document.getElementById("sidebar-menu-bg")
    let c = document.getElementById("cart-logo")
    let cp = document.getElementById("cart-panel")
    cp.classList.remove("active")
    while(cp.firstChild){
      cp.removeChild(cp.firstChild)
    }
    if(props.cart.length !== 0){
      var total = 0
      c.classList.add("active")
      props.cart.forEach(e => {
        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var div3 = document.createElement("div")
        var i = document.createElement("i")
        var hr = document.createElement("hr")
        var h4 = document.createElement("h4")
        var p = document.createElement("p")
        var p2 = document.createElement("p")
        h4.innerHTML = e.name
        p.innerHTML = "Php " +e.price+ ".00"
        p2.innerHTML = "x" + e.quantity
        i.classList.add("fa")
        i.classList.add("fa-times")
        i.style.fontSize = "16px"
        i.style.color = "red"
        i.style.cursor = "pointer"
        i.id = e.name
        i.addEventListener("click", removeProduct)
        div3.appendChild(h4)
        div3.appendChild(i)
        div3.classList.add("flex")
        div.appendChild(div3)
        div2.appendChild(p)
        div2.appendChild(p2)
        div2.classList.add("flex")
        div.appendChild(div2)
        div.appendChild(hr)


        cp.appendChild(div)

        total = total + (e.price * e.quantity)
      });

      var h3 = document.createElement("h3")
      h3.innerHTML = "Total:  Php " +total+ ".00"
      cp.appendChild(h3)
      
      var b = document.createElement("button")
      b.innerHTML = "Checkout"
      b.addEventListener("click", handleClick)
      cp.appendChild(b)

      props.setTotal(total)
    } else {
      c.classList.remove("active")
    }

    // console.log(props.cart.length);
  })

  function toggleCart(){
    let c = document.getElementById("cart-panel")
    if(c.classList.contains("active")){
      c.classList.remove("active")
    } else {
      c.classList.add("active")
    }

  }



    return  <>
    <header id="header2">
      <div className='container'>
      <div id="nav-container">
      <button id="nav-mobile" onClick={showSideBar}>
      {/* <i className="fa fa-bars fa-6"></i> */}
      <img src={v100} />
    </button>
    <Link to="/" id="logo-fatima">
          <img src={logo} style={{height:'5vh', width:"5vh" }}></img>
          <h1 >FATIMA </h1> 
          </Link>
      </div>

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
             <i id="cart-logo" className="fa fa-shopping-cart" onClick={toggleCart}></i>
          </ul>

      </div>
          

  </header>
  <div id="sidebar-menu-bg" onClick={hideSideBar}>

  </div>
  <div id="sidebar-menu">
  <Link to="/" id="logo-fatima" onClick={hideSideBar}>
          <img src={logo} style={{height:'37px', width:"37px" }}></img>
          <h1>FATIMA </h1> 
          </Link>
          <ul>
            <li><p>WEBSITE CONTENT</p></li>
             <li>
              <Link to="/what-we-do" onClick={hideSideBar}>
                What we do
              </Link>
             </li>
             <li>
              <Link to="/offers" onClick={hideSideBar}>
                Offers
              </Link>
             </li>
             <li>
              <Link to="/about-us" onClick={hideSideBar}>
                About Us
              </Link>
             </li>
             <li></li>
             <li></li>
             <li>
              <Link to="/donate" id="donate-link" onClick={hideSideBar} style={{backgroundColor: "white", color: "lightblue", borderRadius: 20, fontWeight: "bold", padding: "6px 20px 6px 20px"}}>
                Donate
              </Link>
             </li>
          </ul>
  </div>

  <div id="cart-panel">
                {/* <p id='student-name' >User</p>
                <hr />

              <Link to="/checkout">
                Checkout
              </Link> */}
  </div>
  </>
}
export default Header2