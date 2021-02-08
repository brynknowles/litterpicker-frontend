// src/App.js : This is the file for App Component. 
// App Component is the main component in React which acts as a container for all other components.


import './App.css';
// import { Redirect, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
// import Home from './pages/Home'
// import { Home, Explore, Profile, Create } from './pages'
import Home from './components/Home'
import Explore from './components/Explore'
import Profile from './components/Profile'
import Create from './components/Create'
import Footer from './components/Footer'

function App() {
  const [users, setUsers] = useState([])
  const [cleanups, setCleanups] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedButton, setSelectedButton] = useState("home")

  useEffect(() => {
      fetch("http://localhost:3000/users")
      // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
      .then(r => r.json())
      .then(setUsers)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/cleanups")
    // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
    .then(r => r.json())
    .then(setCleanups)
}, [])

console.log("cleanups in App:", cleanups)

// adds new cleanup to list of cleanups
function handleCreateCleanup(newCleanup) {
  const newCleanupArray = [newCleanup, ...cleanups];
  setCleanups(newCleanupArray);
}

// allows page navigation to work onClick in NavBar component
  let pageToDisplay = <Home />

  if (selectedButton === "Home") {
    pageToDisplay = <Home /> 
  } else if (selectedButton === "Explore") {
    pageToDisplay = <Explore users={users} cleanups={cleanups} searchTerm={searchTerm} setSearchTerm={setSearchTerm} onCreateCleanup={handleCreateCleanup} /> 
  } else if (selectedButton === "Profile") {
    pageToDisplay = <Profile users={users} cleanups={cleanups} />
  } else if (selectedButton === "Create") {
    pageToDisplay = <Create />
  }

  function handleNavSelection(newSelection) {
    console.log(newSelection)
    setSelectedButton(newSelection)
  }

  // <Switch>
    // <Route exact path="/">
    //   <Home />
    // </Route>
    // <Route path="/projects/add">
    //   <ProjectForm onAddProject={handleAddProject} />
    // </Route>
    // <Route exact path="/projects/:id">
    //   <ProjectDetail />
    // </Route>
    // <Route path="/projects">
    //   <ProjectList />
    // </Route>
    // <Route path="*">
    //   <Redirect to="/" />
    // </Route>
  // </Switch>

  return (
      <div className="App">
        <Header selectedButton={selectedButton} />
        <NavBar selectedButton={selectedButton} onNavClick={handleNavSelection} />
        {pageToDisplay}
        {/* <Home /> */}
        {/* <Explore /> */}
        {/* <Profile /> */}
        {/* <Create /> */}
        <Footer />
      </div>
  );
}

export default App;
