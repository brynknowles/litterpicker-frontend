// src/App.js : This is the file for App Component. 
// App Component is the main component in React which acts as a container for all other components.


import './App.css';
// import { Redirect, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'
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
  const [selectedNav, setSelectedNav] = useState("home")

  let pageToDisplay = <Home />

  if (selectedNav === "home") {
    pageToDisplay = <Home /> 
  } else if (selectedNav === "explore") {
    pageToDisplay = <Explore /> 
  } else if (selectedNav === "profile") {
    pageToDisplay = <Profile />
  } else if (selectedNav === "create") {
    pageToDisplay = <Create />
  }

  function handleNavSelection(newSelection) {
    console.log(newSelection)
    setSelectedNav(newSelection)
  }

  return (
      <div className="App">
        <Header />
        {/* <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
        <NavBar selectedNav={selectedNav} onNavClick={handleNavSelection} />
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

{/* <Switch>
<Route exact path="/">
  <Home />
</Route>
<Route path="/projects/add">
  <ProjectForm onAddProject={handleAddProject} />
</Route>
<Route exact path="/projects/:id">
  <ProjectDetail />
</Route>
<Route path="/projects">
  <ProjectList />
</Route>
<Route path="*">
  <Redirect to="/" />
</Route>
</Switch> */}
