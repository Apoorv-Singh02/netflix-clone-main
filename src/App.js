import React,{ useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  const [user,setuser] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setuser(usr)
    } else {
      console.log(usr)
      setuser(null)
    }
  });

  return (


    <div className="app">
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (      
      <Routes>
        <Route path="/" element={<HomeScreen />}>
        </Route>
      </Routes>)}
    </Router>
    </div>
  );
}

export default App;
