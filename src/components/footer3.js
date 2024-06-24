import { Link } from 'react-router-dom';
import fb from '../pages/pics/fb_icon.png';
import logo from '../pages/pics/logo.png';
import v0 from '../pages/pics/vectors/vector0.svg';
import { useEffect, useState } from "react"
import { storage, db } from "../firebase"
import { addDoc, collection, doc, onSnapshot, updateDoc } from "firebase/firestore"

function Footer3(){


    useEffect(()=>{

        console.log(window.screen.width);

            const unsub = onSnapshot(collection(db, "FatimaResources"), (snapshot) => {
                let list = []
                snapshot.docs.forEach(docs =>{
                    // console.log(docs.id);
                    list.push(docs.data())
                    // console.log(docs.data())
                })

                list.forEach(d => {
                    if(d.id === "genInfo"){
                        let a = document.getElementById("short-description")
                        a.innerHTML = d.content
                        let b = document.getElementById("f-email")
                        b.innerHTML = d.email
                        let c = document.getElementById("f-number")
                        c.innerHTML = d.number
                    } 
                });
            }, (error) => {
                console.log(error);
            })

            return () => {
                unsub()
            }
    })

    return <footer id='footer3'>
        <img src={v0} id='v0' />
        <div id='footer3-container'>
        <div id='title-container' style={{gridRow: 4, gridColumn: 1, display: "flex"}}> <img src={logo} id='footer3-logo' style={{gridRow: 4, gridColumn: 1, width: "57px", height: "55px", display: "flex", alignItems: "center"}}/>
        <h3 style={{gridRow: 4, gridColumn: 1}}>
            FATIMA
        </h3></div>
       
        <p id='short-description' style={{gridRow: "5 / span 4", gridColumn: "1 / span 2"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
        </p>
        {/* <div  style={{gridRow: 4, gridColumn: 1}}id='footer3-container1-wrapper'>
            


            
        </div>*/}
        {/* <ul style={{gridRow: "3 / span 5", gridColumn: "3 / span 1"}}>  */}
        <p id='quick-links' style={{gridRow: 4, gridColumn: 3, paddingRight: 0, fontSize: 16, display: "flex", alignItems: "center", marginBottom: 15, width: "100%"}}>QUICK LINKS</p>
        <Link className='footer-link' style={{gridRow: 5, gridColumn: 3}} to="/what-we-do">What We Do</Link>
        <Link className='footer-link' style={{gridRow: 6, gridColumn: 3}} to="/offers" >Offers</Link>
        <Link className='footer-link' style={{gridRow: 7, gridColumn: 3}} to="/about-us" >About Us</Link>
        <Link className='footer-link' style={{gridRow: 8, gridColumn: 3}} to="/donate" >Donate</Link>
            
        {/* // </ul> */}
        {/*
            <div className='email'>

            <div className='fb'>

            </a>
            </div> */}
            <a href="mailto:fatima_center@yahoo.com" style={{gridRow: 6, gridColumn: "4 /span 3"}}>
            <i className='fas fa-mobile'style={{marginLeft: 3}}> </i>
            <p id='f-number'>+63 (938) 083 0733</p>
            </a>
            <a href="mailto:fatima_center@yahoo.com" style={{gridRow: 7, gridColumn: "4 /span 3"}}>
            <i className='fas fa-envelope'> </i>
            <p id='f-email'>fatima_center@yahoo.com</p>
            </a>
            <a href="https://web.facebook.com/FatimaCenterForHumanDevelopment" target="_blank" style={{gridRow: 8, gridColumn: "4 /span 3", paddingBottom: 30, marginBottom: 0}}>
            <i className="fa fa-facebook-square"style={{marginLeft: 1}}></i>
            <p id='footer-fb'>facebook.com/FatimaCenter<br/>ForHumanDevelopment</p>
            </a>
        </div>
        
  </footer>
}

export default Footer3