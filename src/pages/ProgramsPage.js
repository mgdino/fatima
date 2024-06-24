import mv from '../pages/pics/mv.jpg';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function ProgramsPage(){
    window.scrollTo(0, 0);


    useEffect(()=>{
   
        var pIMG = document.getElementById("program-img")
        var m = document.querySelector(".mission")
        var v = document.querySelector(".vision")
    
        setTimeout(() => pIMG.classList.add("active"), 150)
        setTimeout(() => m.classList.add("active"), 200)
        setTimeout(() => v.classList.add("active"), 320)
    
    }, [])



    return <>
    <div className="programs-hero">
        <div className='programs-hero-container'>
        <h1>Catchy title for What We Do.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
        </div>
    </div>
    <div className='programs-second'>
        <div className='ps-donate'>
            <h3>
                Make a difference.
            </h3>
            <p>
            Support the cause you believe in and be With Us. Everywhere.
            </p>

            <Link to='/donate'>
                <p>DONATE</p>
            </Link>
        </div>
        <div className='ps-img-container'>
            <img src={mv}></img>
        </div>


    </div>

    <div className='other-programs-container'>
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
    </div>

  
        
        </>
}

export default ProgramsPage