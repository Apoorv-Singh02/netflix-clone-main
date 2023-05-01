import React from 'react'
import Nav from '../Nav'
import './ProfileScreen.css'
import { logout } from '../features/counter/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProfileScreen() {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user.user)

  const Navigate = useNavigate()

  if(!user){
    return Navigate("/")
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
        console.log("Sign-out successful.")
        dispatch(logout())
      }).catch((error) => {
        console.log(error)
      });
    }

    if (!user) {
      
    }
  return (
    
    <div className='Prof-Back'>
      <Nav />

      <div className='centerdiv'>
      <img className="avatar" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="avatar" />

        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    
    </div>
  )
}

export default ProfileScreen