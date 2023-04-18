import React from 'react'
import './SignInScreen.css'

function SignInScreen() {
  return (
    <div className="sign_screen">
        <div className="sign_header">
            <img className="loginscreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
        </div>
        <div className="sign_body">
            <h2>Sign In</h2>
            <form className="form-signin">
                <input type="email" placeholder="email" className="input-sign" />
                <input type="password" placeholder="password" className="input-sign" />
                <button type="submit" className="btn">Sign In</button>
            </form>
            <h3>Don't have a account yet?<span>Sign Up Now</span></h3>
        </div>
    </div>
  )
}

export default SignInScreen