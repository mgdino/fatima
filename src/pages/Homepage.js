import  { Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import m1 from '../pages/pics/gallery/m1.jpg';
import m2 from '../pages/pics/gallery/m2.jpg';
import f1 from '../pages/pics/gallery/f1.jpg';
import f2 from '../pages/pics/gallery/f2.jpg';
import f3 from '../pages/pics/gallery/f3.jpg';
import f4 from '../pages/pics/gallery/f4.jpg';
import s1 from '../pages/pics/gallery/s1.jpg';
import s2 from '../pages/pics/gallery/s2.jpg';
import s3 from '../pages/pics/gallery/s3.jpg';
import s4 from '../pages/pics/gallery/s4.jpg';
import main from '../pages/pics/main.jpg';
// import mainbg from '../pages/pics/main-bg.png';
import mainbg from '../pages/pics/main-bg2.png';
import place from '../pages/pics/place.jpg';
import people from '../pages/pics/people.jpg';
import v1 from '../pages/pics/vectors/vector1.svg';
import v4 from '../pages/pics/vectors/vector4.svg';
import v14 from '../pages/pics/vectors/vector14.svg';
var startedBGChange = false
var addedScrollListener = false
var picsVisible = false
var bg
var pics
var idx = 0
var j = 0
var g1
var g2
var g3
var g4
var g5

function d1(){
  let d = document.getElementById("dc1")
  if(d.classList.contains("active")){
      d.classList.remove("active")
      d.firstChild.classList.remove("active")
  } else{
      d.classList.add("active")
      d.firstChild.classList.add("active")
  }
}
function d2(){
  let d = document.getElementById("dc2")
  if(d.classList.contains("active")){
      d.classList.remove("active")
      d.firstChild.classList.remove("active")
  } else{
      d.classList.add("active")
      d.firstChild.classList.add("active")
  }
}
function d3(){
  let d = document.getElementById("dc3")
  if(d.classList.contains("active")){
      d.classList.remove("active")
      d.firstChild.classList.remove("active")
  } else{
      d.classList.add("active")
      d.firstChild.classList.add("active")
  }
}
function d4(){
  let d = document.getElementById("dc4")
  if(d.classList.contains("active")){
      d.classList.remove("active")
      d.firstChild.classList.remove("active")
  } else{
      d.classList.add("active")
      d.firstChild.classList.add("active")
  }
}
function d5(){
  let d = document.getElementById("dc5")
  if(d.classList.contains("active")){
      d.classList.remove("active")
      d.firstChild.classList.remove("active")
  } else{
      d.classList.add("active")
      d.firstChild.classList.add("active")
  }
}

function changeBG() {
  idx++

  if (idx > 2) {
    idx = 0
  } else if (idx < 0) {
    idx = 0
  }

  bg.style.transform = `translateX(${-idx * 100}vw)`


  // console.log(i) 
  // if (i === 0) {
  //   bg.style.background = 'url("' + main +'")'
  //   bg.style.backgroundRepeat = "no-repeat"
  //   bg.style.backgroundSize = "cover"
  //   bg.style.backgroundPosition = "center"
  //   bg.style.transition = "all 0.3s ease-in-out"
  //   i++
  // } else if (i === 1) {
  //   bg.style.background = 'url("' + people +'")'
  //   bg.style.backgroundRepeat = "no-repeat"
  //   bg.style.backgroundSize = "cover"
  //   bg.style.backgroundPosition = "center"
  //   bg.style.transition = "all 0.3s ease-in-out"
  //   i++
  // } else if (i === 2) {
  //   bg.style.background = 'url("' + place +'")'
  //   bg.style.backgroundRepeat = "no-repeat"
  //   bg.style.backgroundSize = "cover"
  //   bg.style.backgroundPosition = "center"
  //   bg.style.transition = "all 0.3s ease-in-out"
  //   i = 0
  // }
}

function changeGaleryPictures(){
  // console.log(j)
  if (j === 0) {
    g2.src = s1
    g2.style.backgroundPosition = "center"
    g2.style.transition = "all 1s ease-in-out"
    j++
  } else if (j === 1) {
    g1.src = m2
    g1.style.backgroundPosition = "center"
    g1.style.transition = "all 1s ease-in-out"
    j++
  } else if (j === 2) {
    g4.src = s3
    g4.style.backgroundPosition = "center"
    g4.style.transition = "all 0.3s ease-in-out"
    j++
   } else if (j === 3) {
    g5.src = s4
    g5.style.backgroundPosition = "center"
    g5.style.transition = "all 0.3s ease-in-out"
    j++
   } else if (j === 4) {
    g3.src = s2
    g3.style.backgroundPosition = "center"
    g3.style.transition = "all 0.3s ease-in-out"
    j = 0
   }
}
async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

async function testSleep(pics) {
  console.log("Waiting for 1 second...");
  pics[0].classList.add("active-pic")
  await sleep(400);
  pics[1].classList.add("active-pic")
  await sleep(400);
  pics[2].classList.add("active-pic")
  await sleep(400);
  pics[3].classList.add("active-pic")
  await sleep(400);
  pics[4].classList.add("active-pic")
  // await sleep(400);
  console.log("Waiting done."); // Called 1 second after the first console.log
}

async function testSleep2(pics) {
  console.log("Waiting for 1 second...");
  pics[0].classList.add("active-pic")
  await sleep(100);
  pics[1].classList.add("active-pic")
  await sleep(100);
  pics[2].classList.add("active-pic")
  await sleep(100);
  pics[3].classList.add("active-pic")
  await sleep(100);
  pics[4].classList.add("active-pic")
  await sleep(300);
  pics.forEach(pic => {
    pic.classList.remove("active-pic")
  });
  console.log("Waiting done."); // Called 1 second after the first console.log
}

function HomePage(props) {
  window.scrollTo(0, 0);
  var wait = 100
  addedScrollListener = false
  picsVisible = false
  
  useEffect(()=>{
    window.scrollTo(0, 0);
    bg =  document.querySelector(".hero-images")
    var gal =  document.querySelector(".galery")
    var meetCommunity = document.getElementById("meet-community")
    pics = document.querySelectorAll(".gpic-img-container")
    // testSleep2(pics)
    var picsContainer = document.querySelectorAll(".gpic")
    g1 = document.getElementById("g1")
    g2 = document.getElementById("g2")
    g3 = document.getElementById("g3")
    g4 = document.getElementById("g4")
    g5 = document.getElementById("g5")



    // if (!startedBGChange) {
    //   const int = setInterval(changeBG, 6000)
    //   const int2 = setTimeout(() => setInterval(changeGaleryPictures, 4000), 7000)
    //   startedBGChange = true
    // } 

    let abg = document.getElementById("about-bg-img2")
    let abgoals = document.getElementById("about-goals")
    window.addEventListener(  
        "scroll", 
        (e) => {
          const position = window.pageYOffset - window.visualViewport.height;
        //   console.log("g")
          // console.log(position+window.innerHeight)
          if(position >= (abgoals.getBoundingClientRect().bottom)){
            // if(position >= (abg.getBoundingClientRect().bottom)){
            abg.classList.add("active")
          } 
          else {
            abg.classList.remove("active")
          }
        })

    if(!addedScrollListener){
      window.addEventListener(  
        "scroll", 
        (e) => {
          const position = window.pageYOffset + window.innerHeight;
          // console.log(position+window.innerHeight)
          if(position >= (meetCommunity.getBoundingClientRect().top + 300)){
            meetCommunity.classList.add("active")
          } 
          // else {
          //   meetCommunity.classList.remove("active")
          //   // pics.forEach(pic => {
          //     // pic.classList.remove("active-pic")
          //     // console.log("removed")
          //   // });
          // }
  
          if(position >= (picsContainer[0].getBoundingClientRect().top + 600) && !picsVisible){
            // console.log("added")
            testSleep(pics)
            // pics[0].classList.add("active-pic")
            // pics[1].classList.add("active-pic")
            // pics[2].classList.add("active-pic")
            // pics[3].classList.add("active-pic")
            // pics[4].classList.add("active-pic")

            // pics.forEach(pic => {
            //   setTimeout(() => pic.classList.add("active-pic"), 400)
            //   wait += 400
            // });


            picsVisible = true
          } 
          // else if(position < (picsContainer[0].getBoundingClientRect().top + 600) && picsVisible){
          //   pics.forEach(pic => {
          //     pic.classList.remove("active-pic")
          //   });
          //   wait = 100
          //   picsVisible = false
          // }
          //  else {

          // }
  
          
  
            addedScrollListener = true
          })
    }

      }, [])
  

    return <>
    <img src={main} id='about-bg-img1'></img>
    <img src={place} id='about-bg-img2'></img>
    <div className='main-container'>
      <section id='fatima-main'>
      <img src={mainbg} id='mainbg'/>
      {/* <img src={v1} id='v1-2'/> */}
      <div>
      {/* <h1>Fatima</h1> */}
      <h1>
      <section class="text-box">
        <div class="letters">
          <span>F</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>M</span>
          <span>A</span>
        </div>
      </section>
      </h1>
      <h3 class="subtext-wrapper">  
       <div>We help</div>
       <div class="words">
           <span>those in Need.</span>
           <span>the Abandoned.</span>
           <span>the Oppressed.</span>
           <span>those in Need.</span>
       </div>
       </h3>
      </div>
    <div id='loading-container' style={{display: "none"}}>
    <div class="loading" style={{display: "none"}}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <img src={m2}></img>
    <span></span>
    <span></span>
    </div>
    </div>

   
      </section>
      {/* <section className='quote1'>
      <h1>
        "No one is useless in this world who lightens the burdens of another"
      </h1>
    </section> */}
      {/* <div className='hero'>
      <div className='hero-images'>
        <div id='hero1' className='hero-image'></div>
        <div id='hero2' className='hero-image'></div>
        <div id='hero3' className='hero-image'></div>
      </div>
      <div className="hero-container-dim">
      </div>
      <div className="hero-container">
      <h1>Welcome!</h1>
        <br />
        <h4>Each of our prodcuts is carfeully crafted just for you!</h4>
        <h5>Start at ₱95</h5>
      </div>
      </div> */}




    {/* <section style={{width: "100vw", height: "100vh", backgroundColor: "white"}}> */}
 

    {/* </section> */}

    <section className='gallery'>
      <h1 id='meet-community'>Meet our community</h1>
        <div className='gallery-container'>

            <div className='gpic featured'>
              <div className='gpic-img-container'>
              <img src={m1} id="g1"></img>
              </div>
            </div>
            <div className='gpic' style={{gridColumn: 3}}>
            <div className='gpic-img-container'>
              <img src={f1} id="g2"></img>
              </div>
            </div>
            <div className='gpic' style={{gridColumn: 4}}>
            <div className='gpic-img-container'>
              <img src={f2} id="g3"></img>
              </div>
            </div>
            <div className='gpic' style={{gridColumn: 3}}>
            <div className='gpic-img-container'>
              <img src={f3} id="g4"></img>
              </div>
            </div>
            <div className='gpic' style={{gridColumn: 4}}>
            <div className='gpic-img-container'>
              <img src={f4} id="g5"></img>
              </div>
            </div>
        </div>
    </section>
    <img src={main} id='about-img1'></img>
    {/* <section className='products'>
      <div className='image-container'>
        <img src=''></img>
      </div>
      <div className='image-container main-img'>
        <img src=''></img>
      </div>
      <div className='image-container'>
        <img src=''></img>
      </div>
    </section> */}
    <section className='quote2'>
    <h1>
    "No one is useless in this world who lightens the burdens of another"
      </h1>
    </section>

    <div id='about-goals' style={{padding: 0}}>
    {/* <img src={v4} id='v4' /> */}
    <h1>Our Goals</h1>
    <div className='goal-dropdown'>
        <p>
        Develop & empower the disadvantaged sectors
        </p>
        <i className="fa fa-angle-down" onClick={d1}></i>
    </div>
    <div className='goal-dropdown-content' id='dc1'>
        <p>
        To develop and empower the disadvantaged sectors become partners and advocates in the betterment of their lives as they are assisted in recognizing their fundamental calling to the Christian life and in full union with God, our Creator(Lumen Gentium 39)
        </p>
    </div>

    <div className='goal-dropdown'>
        <p>
        Help imbibe faith & beliefs of others
        </p>
        <i className="fa fa-angle-down" onClick={d2}></i>
    </div>
    <div className='goal-dropdown-content' id='dc2'>
        <p>
        To promote and help the sectors we serve imbibe the truth of their faith in a community of friendship just as Jesus Christ calls His Disciples not anymore servants but friends.
        </p>
    </div>
    <div className='goal-dropdown'>
        <p>
        Conduct collective efforts for the communities
        </p>
        <i className="fa fa-angle-down" onClick={d3}></i>
    </div>
    <div className='goal-dropdown-content' id='dc3'>
        <p>
        To conduct and collaborate with partners like other NGO’s, Government Agencies (GA’s) whether local or national level, as well as some international groups/organizations sharing common and the same advocacies with the Agency (FaCe) and the communities the latter serves, for their welfare and benefit especially those who are the vulnerable and marginalized sectors, setting aside any political agenda of any person or groups.        </p>
    </div>
    <div className='goal-dropdown'>
    <p>
    Provide meaning on people's lives
    </p>
    <i className="fa fa-angle-down" onClick={d4}></i>
    </div>
    <div className='goal-dropdown-content' id='dc4'>
        <p>
        To provide meaning in the lives of the people we serve through our programs and services, and outreach projects/activities thus bringing their contemporary times the compassion Jesus Christ who always shares in complete solidarity to the said disadvantaged sectors under the auspices of our Agency.        </p>
    </div>
    <div className='goal-dropdown'>
        <p>
        Help others to be productive and self-reliant
        </p>
        <i className="fa fa-angle-down" onClick={d5}></i>
    </div>
    <div className='goal-dropdown-content' id='dc5'>
        <p>
        To assist children, youth, women, IP’s, families and communities become self-reliant and productive partners in their own communities without setting aside the belief and the living faith in unifying to the virtues of poverty, chastity, and humility of Jesus Christ with the Virgin Mother of God (Virgin Mary), our Lady of Good Counsel through the Augustinian spiritually.        </p>
    </div>

    </div>
    {/* <section className='posts'></section> */}
    {/* <hr /> */}

    {/* <section className='donate'>
      <div id='don-con'>
      <div className='donate-container'>
      <h2>
        Make a difference
      </h2>
      <p>
      Support the cause you believe in and be With Us. Everywhere.
      </p>
      <Link to="/donate">Donate Now</Link>
      </div>
      </div>
      

    </section> */}
        <img src={place} id='about-img2'></img>
    <div  id='programs-page-3'>
    <img src={v14} id='v14' />
    <div id='pp3-container'>
        <div id='pp3-heading'>
            <h3>
                Make a 
            </h3>
            <h3>
            difference.
            </h3>
        </div>
        <div id='pp3-content'>
            <p>
            Support the cause you believe in and be With Us. Everywhere.
            </p>

            <Link to='/donate'>
                <p>DONATE</p>
            </Link>
        </div>

    </div>
    </div>
</div>
</>
  }
  
export default HomePage;