import {Link, useNavigate} from 'react-router-dom';

function LoginForm(props) {
  const navigate = useNavigate();
  // console.log(props)
  // console.log(props.nav)

  const handleSubmit = (e) => {
    e.preventDefault();
    let u = document.getElementById("username-field")
    let p = document.getElementById("password-field") 
    let w = document.getElementById("error-login")
    p.classList.remove("active")
    p.classList.remove("error")
    if(u.value === "user-admin" & p.value === "fatima-admin"){
      props.setAuthenticated(true)    
      navigate('/admin');
    }
    else if (u.value === "cyril"  & p.value === "fatimacenter"){
      props.setAuthenticated(true)    
      navigate('/admin');
    }
    else if (u.value === "mae"  & p.value === "ilovefatima"){
      props.setAuthenticated(true)    
      navigate('/admin');
    } else{
      setTimeout(() => {     p.classList.add("error")
      w.innerHTML = "Username and Password does not match!"
      w.classList.add("active")}, 10)

    }
    


    // props.setNavState("header standardh")
    // props.setNavState("standard")
      
    
  }

  return (<div className="login-form">
    <form onSubmit={handleSubmit} style={{ textAlign: "center"}}>
    <h1 style={{textAlign: "center", width: "100%", margin: "0 0 30px 0"}}>Login</h1>
        <input id='username-field' type="text" autoFocus={true} name="username" placeholder='Username' required/>

        <input id='password-field' type="password" name="password"placeholder='Password' required/>
        <p id='error-login'></p>
        <div id='submit-containter'>
        <input type="submit" id="login-btn" />
        </div>

    </form>

  </div>

  )
}

export default LoginForm