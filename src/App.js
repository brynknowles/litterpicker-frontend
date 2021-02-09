// src/App.js : This is the file for App Component. 
// App Component is the main component in React which acts as a container for all other components.


import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Explore from './components/Explore'
import Profile from './components/Profile'
import CleanupForm from './components/CleanupForm'
// import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Footer from './components/Footer'

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
      <div className="App">
        <Header />
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cleanups">
            <Explore /> 
          </Route>
          <Route exact path="/users/:id">
            <Profile />
          </Route>        
          <Route exact path="/cleanups/new">
            <CleanupForm />
          </Route>
          <Route exact path="/users/new">
            <SignupForm />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
