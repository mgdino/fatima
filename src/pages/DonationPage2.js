import you from '../pages/pics/you-pic.svg';
import we from '../pages/pics/we-pic.svg';
import they from '../pages/pics/they-pic.svg';
import gcash from '../pages/pics/gcash-logo2.png';
import { useEffect, useState } from "react"
import v20 from '../pages/pics/vectors/vector20.svg';
import v21 from '../pages/pics/vectors/vector21.svg';

function DonationPage2(){

    window.scrollTo(0, 0);

    useEffect(()=>{
   

          }, [])

    return <>
    <div id='donation-hero'>
    <img src={v20} id='v20' />
    <img src={v21} id='v21' />
          <h1>
          For Donations
          </h1>
          <div id='donate-p'>
          <p style={{textAlign: "center", width: "fit-content", maxWidth: 400, margin: 0,padding: 0, alignItems: "center"}}>Contact us through the following for any donations and inquiries:</p>

          </div>
          {/* <p style={{textAlign: "center", width: "100%", margin: 0,padding: 0, alignItems: "center"}}>Contact us through the following for any donations and inquiries:</p> */}
          <div id='donate-contacts'>
          <div id='donation-contacts'>
          <a className='flex1' href="mailto:fatima_center@yahoo.com" >
            <i className='fas fa-mobile' style={{marginLeft: 3, marginRight: 20, opacity: 0.8, fontSize: 40, color: "#5682C1", marginBottom: 7.5, marginTop: 7.5}}> </i>
            <p id='f-number' style={{maxWidth: "400px", padding: 0, margin: 0}}>+63 (938) 083 0733</p>
            </a>
            <a className='flex1' href="mailto:center_fatima@yahoo.com" >
            <i className='fas fa-envelope' style={{marginRight: 20, opacity: 0.8, fontSize: 40, color: "#5682C1", marginBottom: 7.5, marginTop: 7.5}}> </i>
            <p id='f-email'  style={{maxWidth: "400px", padding: 0, margin: 0}}>center_fatima@yahoo.com</p>
            </a>
            <a className='flex1' href="https://web.facebook.com/FatimaCenterForHumanDevelopment" target="_blank" >
            <i className="fa fa-facebook-square" style={{marginLeft: 1, marginRight: 20, opacity: 0.8, fontSize: 40, color: "#5682C1", marginBottom: 7.5, marginTop: 7.5}}></i>
            <p  id='donation-fb' style={{maxWidth: "400px", padding: 0, margin: 0}}>facebook.com/FatimaCenter<br/>ForHumanDevelopment</p>
            </a>
          </div>
          </div>

          {/* <h1>
          (idfk what should i put here).
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. (What does Fatima do to the donations).
          </p> */}
          {/* <div id='donate-card-container'>
            <div className='donate-card'>
                <div className='donate-card-content'>
                <img src={gcash} style={{height:"112px", width: "108px"}}></img>
                <h4>
                +63 912 345 6789
                </h4>
                <p>
                INSERT NAME HERE
                </p>
                </div>
            </div>
            <div className='donate-card'>
                <div className='donate-card-content'>
                <img  style={{height:"112px", width: "108px"}}></img>
                <h4>
                0000 0000 0000
                </h4>
                <p>
                NAME:
                </p>
                <p>
                OTHER DETAILS:
                </p>
                </div>
            </div>

          </div> */}
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

export default DonationPage2