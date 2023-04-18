import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
  return (
    <div className="loginscreen">
      <div className="loginscreen_gradient" />
      <div className="loginHeader">
        <img className="loginscreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
        <button className="loginscreen_button">Sign In</button>
      </div>
      <div className="loginscreen_body">
        <h1>Unlimited Films, TV Shows and more</h1>
        <h2>Watch anywhere, Cancel any time</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form className="form">
          <input type="email" placeholder="Enter your email address" className="input" />
          <button type="submit" className="btn">GET STARTED</button>
        </form>
      </div>
      <div className="loginscreen_input">

      </div>
    </div>
  )
}

export default LoginScreen