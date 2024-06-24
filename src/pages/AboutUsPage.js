import logo from '../pages/pics/logo.png';

function AboutUsPage(){
    window.scrollTo(0, 0);

    return <><div className='hero-aboutus'></div>
    <div className="history-container">
    <div className="history">
        <img src={logo} style={{height:'150px', width:"150px" }}></img>
        <h1>The Foundation of Our Lady Fatima Center for Human Development</h1>
        <h2>History</h2>
        <p>The apostolate which started by our foundries sister Lasalette Baysa and sister Felicitas de 
            Lima in a small nipa hut house in San Agustin village of Iriga City in 1975 as a awareness program 
            to the poor people of neighborhood to the 8 hectares center with its own kinder, primary and high 
            school for the poor and place of several livelihood projects for poor people of surrounding area.</p>
        <p>The Center's pioneering community development endeavor was originally focused on the cultural minorities 
            called the AGTA who lived in the foot of mt. Iriga but later it was also extended to the poor people of 
            the low lad area.</p>
        <p>Fatima Center commits itself the "participatory approach" towards development in which people
            THEMSELVES formulate their own plans, make their own individual or group decisions 
            and implement their own programs. In this context, the community workers serve as facilitators, 
            enablers and trainers who help create the awareness that social change is possible.</p>
    </div>
    </div>
</>
}

export default AboutUsPage