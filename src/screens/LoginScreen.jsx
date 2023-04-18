import React, {useState} from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSignIn(true);
  }

  return (
    <div className="loginscreen">
      <div className="loginscreen_gradient" />
      {signIn ? (<SignInScreen />) : (<><div className="loginHeader">
        <img className="loginscreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
        <button className="loginscreen_button" onClick={handleClick}>Sign In</button>
      </div><div className="loginscreen_body">
          <h1>Unlimited Films, TV Shows and more</h1>
          <h2>Watch anywhere, Cancel any time</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <form className="form" onsubmit={(e) => {
            e.preventDefault();

          } }>
            <input type="email" placeholder="Enter your email address" className="input" />
            <button type="submit" className="btn" onClick={handleClick}>GET STARTED</button>
          </form>
        </div><div className="loginscreen_input">

        </div></>)}

    </div>
  )
}

export default LoginScreen