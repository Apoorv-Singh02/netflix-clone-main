import React from 'react';
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

function App() {
  const user = 1;

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
