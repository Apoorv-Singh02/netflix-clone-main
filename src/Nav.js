import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Nav.css'

function Nav() {
    const [show,handleShow]=useState(false);


    const Navigate = useNavigate()
    const handleProfile = () => {
      const avpath = "/profile";
      Navigate(avpath)
    }

    const handlemain = () => {
      const mpath = "/";
      Navigate(mpath);
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
         alt="Netflix" onClick={handlemain} />


        <img className="nav_avatar" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="avatar" onClick={handleProfile}/>
        </div>
    </div>


  )
}

export default Nav