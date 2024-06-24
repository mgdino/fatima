import you from '../pages/pics/you-pic.svg';
import we from '../pages/pics/we-pic.svg';
import they from '../pages/pics/they-pic.svg';
import gcash from '../pages/pics/gcash-logo.png';
import { useEffect, useState } from "react"
var popupBG
var popupContent
function openPopUp() {
    popupBG.classList.add("active")
    popupContent.classList.add("active")
  }
function closePopUp() {
    popupBG.classList.remove("active")
    popupContent.classList.remove("active")
  }
function DonationPage(){


    window.scrollTo(0, 0);

    useEffect(()=>{
   
        popupBG = document.getElementById("donation-popup")
        popupContent = document.getElementById("donation-popup-content")
    
          
          }, [])

    return <>
    <div id='donation-popup'></div>
    <div id='donation-popup-content'>
    <div id='gcash-qr'> 
    <button id='close-popup-btn' onClick={closePopUp}>
        <i className='fas fa-times'> </i>
    </button>

    </div>
    </div>
    <div className='donation-head'>
    <h1>Choose your prefered payment method:</h1>
    <div>
    <div className='gcash-container'>
        <button className='gcash' onClick={openPopUp}>
            <img src={gcash}></img>
        </button>
    </div>        
    </div>
    </div>
    <section className="donation-cycle">
        {/* <h2>Cycle</h2> */}
        <div className="donation-cycle-container">
            <div className="donation-steps">
                <div className="step-number">
                <p>1</p>
                </div>

                <div className="step-content">
                    <h3>
                        You
                    </h3>
                    <p>Make a generous donation</p>
                    <img src={you}></img>
                </div>
            </div>
            <div className="donation-steps">
            <div className="step-number">
                <p>2</p>
                </div>
                <div className="step-content">
                    <h3>
                        We
                    </h3>
                    <p>Execute the projects and help those in need</p>
                    <img src={we}></img>
                </div>
            </div>
            <div className="donation-steps">
            <div className="step-number">
                <p>3</p>
                </div>
                <div className="step-content">
                    <h3>
                        They
                    </h3>
                    <p>Benefit from actions that change their lives</p>
                    <img src={they}></img>
                </div>
            </div>
            
        </div>
    </section>



    
    </>
}

export default DonationPage