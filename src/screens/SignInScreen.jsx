import React, { useState } from 'react'
import './SignInScreen.css'
import { initializeApp } from "firebase/app";
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login , logout } from '../features/counter/userSlice';

function SignInScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, seterr] = useState("")
  const dispatch = useDispatch()

  const handleSignUp = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        dispatch(login(userCredential))
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    setEmail("")
    setPassword("")
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        dispatch(login(userCredential))
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message)
        const str=error.message;
        const after = str.slice(str.indexOf('/')+1,str.indexOf(')'))
        seterr(after)
      });

    setEmail("")
    setPassword("")
  }

  return (
    <div className="sign_screen">
      <div className="sign_header">
        <img className="loginscreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
      </div>
      <div className="sign_body">
        <h2>Sign In</h2>
        <form className="form-signin" onSubmit={handleSignIn}>
          <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} className="input-sign email" />
          <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} name="password" className="input-sign password" />
          <button type="submit" className="btn-sign">Sign In</button>
          {err.length > 0 && <div>{err}</div>}
        </form>
        <h3>Don't have a account yet?<span className='signup-btn' onClick={handleSignUp}>Sign Up Now</span></h3>
      </div>
    </div>
  )
}

export default SignInScreen