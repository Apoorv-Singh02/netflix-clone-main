import React, { useEffect, useState } from 'react'
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import './Nav.css'

function Nav() {
    const [show,handleShow]=useState(false);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign-out successful.")
          }).catch((error) => {
            console.log(error)
          });
          
    }

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_content">
        <img className='nav_logo'
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
         alt="Netflix" />


        <img className="nav_avatar" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="avatar" onClick={handleSignOut}/>
        </div>
    </div>


  )
}

export default Nav