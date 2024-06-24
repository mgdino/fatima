import mv from '../pages/pics/mv.jpg';
import pp1 from '../pages/pics/pp1.jpg';
import pp2 from '../pages/pics/pp2.jpg';
import pp2_1 from '../pages/pics/pp-1.png';
import pp2_2 from '../pages/pics/pp-2.png';
import pp2_3 from '../pages/pics/pp-3.png';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { storage, db } from "../firebase"
import { addDoc, collection, doc, onSnapshot, updateDoc } from "firebase/firestore"
import v10 from '../pages/pics/vectors/vector10.svg';
import v11 from '../pages/pics/vectors/vector11.svg';
import v12 from '../pages/pics/vectors/vector12.svg';
import v13 from '../pages/pics/vectors/vector13.svg';
import v14 from '../pages/pics/vectors/vector14.svg';


function ProgramsPage2(){
    window.scrollTo(0, 0);


    useEffect(()=>{
   
        let pp = document.getElementById("programs-page-2")
        let abg = document.getElementById("pp2-bg")
        window.addEventListener(  
            "scroll", 
            (e) => {
              const position = window.pageYOffset-500;
            //   console.log("g")
              // console.log(position+window.innerHeight)
              if(position >= (pp.getBoundingClientRect().bottom)){
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
                    if(d.id === "whatWeDoIntro"){
                        let a = document.getElementById("whatWeDoIntro")
                        a.innerHTML = d.content
                    } else if(d.id === "whatWeDoIntroImg1"){
                        let a = document.getElementById("pp1-bg")
                        a.src = d.imageUrl
                    } else if(d.id === "whatWeDoIntroImg2"){
                        let a = document.getElementById("pp2-bg")
                        a.src = d.imageUrl
                    }
                });
            }, (error) => {
                console.log(error);
            })

            return () => {
                unsub()
            }
    
    }, [])



    return <>
    <img src={pp1} id='pp1-bg'></img>
    <img src={pp2} id='pp2-bg'></img>
    <div id='programs-page'>
    <img src={v10} id='v10' />
    <img src={v11} id='v11' />
        <div id='ppg-hero'>
        <h1 style={{marginBottom: 15}}>What We Do</h1>
        <p id="whatWeDoIntro">Fatima Center commits itself the "participatory approach" towards development in which people THEMSELVES formulate their own plans, make their own individual or group decisions and implement their own programs. In this context, the community workers serve as facilitators, enablers and trainers who help create the awareness that social change is possible.</p>
        </div>
        
    </div>
    <img src={pp1} id='pp1-img'></img>
    <div id='programs-page-2'>
    <img src={v12} id='v12' />
    <img src={v13} id='v13' />
    <div id='pp2-container'>
        <div className='pp2-card'>
            <div className='pp2-card-up'>
            <div className='pp2-card-up-up'>
            <div className='blue-circle'>
                <img src={pp2_1}></img>
            </div>
            <h4>
            Social Development Program
            </h4>
            </div>

            <p>
            The social development program runs by the center engages people join their efforts for the good of the community that is Christ-Centered.
            </p>
            </div>
            <div className='pp2-card-down'>
            <p>
            Self sustaining and where its members are actively involved in decision making, articulating and realizing their own dreams.            </p>
            </div>
            <div className='pp2-card-color' style={{display: "none", backgroundColor: "#FF5959"}}></div>
        </div>
        <div className='pp2-card'>
            <div className='pp2-card-up'>
            <div className='pp2-card-up-up'>
            <div className='blue-circle'>
                <img src={pp2_2}></img>
            </div>
            <h4>
            Educational Apostolate
            </h4>
            </div>

            <p>
            Enormous amount of families in the surrounding areas are extremely poor and can't send their children even to elementary school            </p>
            </div>
            <div className='pp2-card-down'>
            <p>
            This situation doesn't allow them fully develop their abilities and grow up in fully alive members of the society.            </p>
            </div>
            <div className='pp2-card-color' style={{display: "none", backgroundColor: "#F9B645"}}></div>
        </div>
        <div className='pp2-card'>
            <div className='pp2-card-up'>
            <div className='pp2-card-up-up'>
            <div className='blue-circle'>
                <img src={pp2_3}></img>
            </div>
            <h4>
            Orphanage
            </h4>
            </div>

            <p>
            Now Fatima Center orphanage in the house of more than 120 orphans, abandoned, maltreated by their families and extremely poor children.            </p>
            </div>
            <div className='pp2-card-down'>
            <p>
            Most of them left their homes or have been referred to us because there was no chance for them to survive and receive a good future there.            </p>
            </div>
            <div className='pp2-card-color' style={{display: "none", backgroundColor: "#1AB3CE"}}></div>
        </div>
    </div>
    </div>
    <img src={pp2} id='pp2-img'></img>
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


    {/* <div className='other-programs-container'>
    <div className='other-programs'>
        <h1>Social Development Program</h1>
        <p>The social development program runs ky the center engages people join their efforts for the 
            good of the community that is Christ-Centered. Self sustaining and where its members are 
            actively involved in decision making, articulating and realizing their own dreams.</p>
    </div>
    <div className='other-programs'>
        <h1>Educational Apostolate</h1>
        <p>Enormous amount of families in the surrounding areas are extremely poor and can't send their 
            children even to elementary school. This situation doesn't allow them fully develop their 
            abilities and grow up in fully alive members of the society.</p>
    </div>
    <div className='other-programs'>
        <h1>Orphanage</h1>
        <p>Now Fatima Center orphanage in the house of more than 120 orphans, abandoned, maltreated by 
            their families and extremely poor children. Most of them left their homes or have been 
            referred to us because there was no chance for them to survive and receive a good future 
            there.</p>
    </div>

    <p>We are not only providing a shelter and food for those kids but also trying to use holistic 
        approach in rehabilitating them. In other words we are trying to provide them with paternal 
        love and concern and everything what they were deprived in their homes.</p>
    </div> */}

  
        
        </>
}

export default ProgramsPage2