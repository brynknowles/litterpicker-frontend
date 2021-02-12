// src/App.js : This is the file for App Component. 
// App Component is the main component in React which acts as a container for all other components.


import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Explore from './components/pages/Explore'
// import Profile from './components/Profile'
import CleanupForm from './components/pages/CleanupForm'
import SignupForm from './components/pages/SignupForm'
import Footer from './components/Footer'
// import LoginForm from './components/LoginForm'



function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([])
  const [cleanups, setCleanups] = useState([])
  const [cleanupSearchTerm, setCleanupSearchTerm] = useState("")

  const [currentUser, setCurrentUser] = useState({
    avatar: "https://www.greatoutdoorshop.com/wp-content/uploads/2019/08/WOODSY-OWL-STICKER-1000.jpg",
    username: "Woodsy Owl",
    age: 50,
    catchphrase: "Give a hoot, don't pollute!",
    park_badge: 1,
    playground_badge: 1,
    shoreline_badge: 1,
    trail_badge: 0,
    earth_steward_badge: 1
  })

  // console.log("users, cleanups and searchTerm in App", { users, cleanups, searchTerm })

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    // .then(data => console.log("user data in App", data))
    .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
    fetch("http://localhost:3000/cleanups")
    .then(r => r.json())
    // .then(data => console.log("cleanup data in App", data))
    .then(data => setCleanups(data))
  }, [])

  // console.log("users in App", users)
  // console.log("cleanups in App", cleanups)

    // DONE - Searches cleanups
  const filteredCleanups = cleanups.filter((cleanup) => {
    // console.log("cleanup in search term filter: ", cleanup)
    return cleanup.location.toLowerCase().includes(cleanupSearchTerm.toLowerCase())
  })

    // DONE
  function handleCreateCleanup(newCleanup) {
      // console.log(newCleanup)
      setCleanups([newCleanup, ...cleanups]);
  }

    // WORK ON THIS - only lets you click multiple times after refresh(could the cheer +1 need to be in a callback function?) if clicked twice, cheers are set to 0??? WHY?
  function handleUpdateCheer(updatedCleanup) {
    // console.log("updated cleanup in App: ", updatedCleanup)
    // let newCleanupArray = [...cleanups]
    // let cleanupIndex = newCleanupArray.findIndex((cleanupObj) => cleanupObj.id === updatedCleanup.id)
    // newCleanupArray[cleanupIndex] = updatedCleanup
    // return newCleanupArray
    // setCleanups(newCleanupArray)

    const updatedCleanups = cleanups.map((cleanup) => {
        if (cleanup.id === updatedCleanup.id) {
          return updatedCleanup
        } else {
          return cleanup
        }
      })

    setCleanups(updatedCleanups)
  }

    // DONE
  function handleDeleteCleanup(cleanupToDelete) {
    // console.log(cleanupToDelete)
    const updatedCleanups = cleanups.filter((cleanup) => cleanup.id !== cleanupToDelete)
    setUsers(updatedCleanups)
  }

    // DONE
  function handleCreateUser(newUser) {
    // console.log(newUser)
    setUsers([newUser, ...users]);
  }

    // WORK ON THIS
  function handleDeleteUser(userToDelete) {
    console.log(userToDelete)
    const updatedUsers = users.filter((user) => user.id !== userToDelete)
    setUsers(updatedUsers)
  }

  return (
      <div className="App">
        <Header />
        {/* <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cleanups">
            <Explore currentUser={currentUser} users={users} setUsers={setUsers} onDeleteUser={handleDeleteUser} cleanups={filteredCleanups} setCleanups={setCleanups} cleanupSearchTerm={cleanupSearchTerm} setCleanupSearchTerm={setCleanupSearchTerm} onUpdateCheer={handleUpdateCheer} onDeleteCleanup={handleDeleteCleanup} /> 
          </Route>
          {/* <Route exact path="/users/:id">
            <ProfileDetail users={users} />
          </Route>         */}
          {/* <Route exact path="/cleanups/:id">
            <CleanupDetail cleanups={filteredCleanups}/>
          </Route> */}
          <Route exact path="/cleanups/new">
            <CleanupForm users={users} onCreateCleanup={handleCreateCleanup}/>
          </Route>
          <Route exact path="/users/signup">
            <SignupForm onCreateUser={handleCreateUser} />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        {/* <Home /> */}
        {/* <Explore users={filteredUsers} cleanups={filteredCleanups} /> */}
        {/* <Profile users={filteredUsers} onUserDelete={handleDeleteUser} /> */}
        {/* <CleanupForm onCreateCleanup={handleCreateCleanup}/> */}
        {/* <SignupForm onCreateUser={handleCreateUser} /> */}

        <Footer />
      </div>
  );
}

export default App;
