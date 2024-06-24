import mv from '../pages/pics/mv.jpg';
import pp1 from '../pages/pics/pp1.jpg';
import pp2 from '../pages/pics/pp2.jpg';
import pp2_1 from '../pages/pics/pp-1.png';
import pp2_2 from '../pages/pics/pp-2.png';
import pp2_3 from '../pages/pics/pp-3.png';
import { useEffect, useState } from "react"
import { Link, useNavigate, Navigate } from "react-router-dom"
import v10 from '../pages/pics/vectors/vector10.svg';
import v11 from '../pages/pics/vectors/vector11.svg';
import v12 from '../pages/pics/vectors/vector12.svg';
import v13 from '../pages/pics/vectors/vector13.svg';
import v14 from '../pages/pics/vectors/vector14.svg';
import LoginForm from '../components/loginform';


function LoginPage(props){
    window.scrollTo(0, 0);
    


    return <>
    <div id='login-page' style={{maxHeight: "none"}}>
    <img src={v10} style={{}} id='v10' />
    <img src={v11} id='v11' />
        <LoginForm setAuthenticated={props.setAuthenticated}/>
    </div>  
        </>
}

export default LoginPage