import React,{ useState , useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useNavigate
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import ProfileScreen from './screens/ProfileScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout } from './features/counter/userSlice';


function App() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
  onAuthStateChanged(auth,(usercred)=>{
    if (usercred){
      dispatch(login(usercred))
    }
    else {
      dispatch(logout)
    }
  })
})
  const user = useSelector(state => state.user.user)

  return (
    <div className="app">
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (      
      <Routes>
        <Route path="/" element={<HomeScreen />}>
        </Route>
        <Route path="/profile" element={<ProfileScreen />}></Route>
      </Routes>)}
    </Router>
    </div>
  );
}

export default App;
