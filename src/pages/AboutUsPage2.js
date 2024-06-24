import { useEffect } from 'react';
import { storage, db } from "../firebase"
import { addDoc, collection, doc, onSnapshot, updateDoc } from "firebase/firestore"
import about0 from '../pages/pics/about-us-0.jpeg';
import about1 from '../pages/pics/about-us-1.jpeg';
import about2 from '../pages/pics/about-us-2.jpeg';
import v1 from '../pages/pics/vectors/vector1.svg';
import v2 from '../pages/pics/vectors/vector2.svg';
import v3 from '../pages/pics/vectors/vector3.svg';
import v4 from '../pages/pics/vectors/vector4.svg';
import v5 from '../pages/pics/vectors/vector5.svg';
import v6 from '../pages/pics/vectors/vector6.svg';
import v7 from '../pages/pics/vectors/vector7.svg';

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

function AboutUsPage2(){
    window.scrollTo(0, 0);

    useEffect(()=>{
        let mv = document.getElementById("mv-card-section")
        let abg = document.getElementById("about-bg-img2")
        window.addEventListener(  
            "scroll", 
            (e) => {
              const position = window.pageYOffset-500;
            //   console.log("g")
              // console.log(position+window.innerHeight)
              if(position >= (mv.getBoundingClientRect().bottom)){
                abg.classList.add("active")
              } 
              else {
                abg.classList.remove("active")
              }
            })

            const unsub = onSnapshot(collection(db, "FatimaResources"), (snapshot) => {
                let list = []
                snapshot.docs.forEach(docs =>{
                    // console.log(docs.id);
                    list.push(docs.data())
                    // console.log(docs.data())
                })

                list.forEach(d => {
                    if(d.id === "aboutUsIntro"){
                        let a = document.getElementById("about-us-intro")
                        a.innerHTML = d.content
                    } else if(d.id === "aboutUsImg1"){
                        let a = document.getElementById("about-bg-img1")
                        a.src = d.imageUrl
                    } else if(d.id === "aboutUsImg2"){
                        let a = document.getElementById("about-bg-img2")
                        a.src = d.imageUrl
                    }
                });
            }, (error) => {
                console.log(error);
            })

            return () => {
                unsub()
            }
    })

    return <>
    <img src={about1} id='about-bg-img1'></img>
    <img src={about2} id='about-bg-img2'></img>
    <div id='about-fatima'>
        <img src={v1} id='v1'/>
        <div id='about-fatima-container'>
            <div id='about-fatima-content'>
                <h1>About</h1>
                <h1>Fatima</h1>
                <p id='about-us-intro'>The Foundation of our Lady of Fatima Center for Human Development is our biggest most developed and sufficient social project ran by Daughters of Saint Augustine community which providing shelter, education and better life for hundreds of children and adults.</p>
            </div>
            <img src={about0} id='about-img0'></img>
        </div>

    </div>
    <img src={about1} id='about-img1'></img>
    <div id='mv-card-section'> 
    <img src={v2} id='v2' />
    <img src={v3} id='v3' />
    <div className='mv-card' id='vision-card'>
        <h2>Our Vision</h2>
        <p>As a dynamic religious community operating as a registered agency of SEC and DSWD, we have the charism and the promptings of the Holy Spirit; we envision in bringing the compassion of Jesus Christ to all people from the disadvantaged sectors of the different communities we are serving focusing on the children, youth, minor, families, communities including the indigenous people(IP’s) especially those from the rural areas.</p>
    </div>
    <div className='mv-card' id='mission-card'>
        <h2>Our Mission</h2>
        <p>To alleviate and help transform the lives of the disadvantaged sectors we are committed to serve through the spiritual discernment of our religious community. To provide these sectors opportunities to harness their potentials and realize their God-given dignity thereby becoming responsible and contributing members of their communities.</p>
    </div>
    </div>
    <img src={about2} id='about-img2'></img>
    <div id='about-goals'>
    <img src={v4} id='v4' />
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
    <div id='about-history'>
    <img src={v5} id='v5' />
    <img src={v6} id='v6' />
    <img src={v7} id='v7' />
    <h2>The Foundation of Our Lady Fatima Center for Human Development</h2>
    <h1 style={{color:"white"}}>History</h1>
    <p>
    The apostolate which started by our foundries sister Lasalette Baysa and sister Felicitas de Lima in a small nipa hut house in San Agustin village of Iriga City in 1975 as a awareness program to the poor people of neighborhood to the 8 hectares center with its own kinder, primary and high school for the poor and place of several livelihood projects for poor people of surrounding area.
    </p>
    <p>
    The Center's pioneering community development endeavor was originally focused on the cultural minorities called the AGTA who lived in the foot of mt. Iriga but later it was also extended to the poor people of the low lad area.
    </p> 
    <p>
    Fatima Center commits itself the "participatory approach" towards development in which people THEMSELVES formulate their own plans, make their own individual or group decisions and implement their own programs. In this context, the community workers serve as facilitators, enablers and trainers who help create the awareness that social change is possible.
    </p>

    </div>
</>
}

export default AboutUsPage2