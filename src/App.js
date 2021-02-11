// src/App.js : This is the file for App Component. 
// App Component is the main component in React which acts as a container for all other components.


import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Explore from './components/Explore'
// import Profile from './components/Profile'
import CleanupForm from './components/CleanupForm'
import SignupForm from './components/SignupForm'
import Footer from './components/Footer'
// import LoginForm from './components/LoginForm'



function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([])
  const [cleanups, setCleanups] = useState([])
  const [userSearchTerm, setUserSearchTerm] = useState("")
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

  // const filteredUsers = users.filter((user) => {
  //     // console.log("cleanup in search term filter: ", cleanup)
  //     return user.name.toLowerCase().includes(searchTerm.toLowerCase())
  // })

  const filteredCleanups = cleanups.filter((cleanup) => {
    // console.log("cleanup in search term filter: ", cleanup)
    return cleanup.location.toLowerCase().includes(cleanupSearchTerm.toLowerCase())
  })

    // adds new cleanup to list of cleanups
  function handleCreateCleanup(newCleanup) {
      // console.log(newCleanup)
      setCleanups([newCleanup, ...cleanups]);
      // const newCleanupArray = [newCleanup, ...cleanups];
      // setCleanups(newCleanupArray);

  }

  function handleUpdateCheer(updatedCleanup) {
    console.log("updated cleanup in App: ", updatedCleanup)
  }

  function handleDeleteCleanup(cleanupToDelete) {
    // console.log(cleanupToDelete)
    const updatedCleanups = cleanups.filter((cleanup) => cleanup.id !== cleanupToDelete)
    setUsers(updatedCleanups)
  }

  function handleCreateUser(newUser) {
    // console.log(newUser)
    setUsers([newUser, ...users]);
    // const newUserArray = [newUser, ...users];
    // setUsers(newUserArray)
  }

  // function handleDeleteUser(id) {
  //   console.log(id)
  //   const updatedUserArray = users.filter((user) => user.id !== id)
  //   setUsers(updatedUserArray)
  //   // setUserContent({})
  // }

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
            <Explore currentUser={currentUser} users={users} setUsers={setUsers} cleanups={filteredCleanups} setCleanups={setCleanups} userSearchTerm={userSearchTerm} setUserSearchTerm={setUserSearchTerm} cleanupSearchTerm={cleanupSearchTerm} setCleanupSearchTerm={setCleanupSearchTerm} onUpdateCheer={handleUpdateCheer} onDeleteCleanup={handleDeleteCleanup} /> 
          </Route>
          {/* <Route exact path="/users/:id">
            <Profile users={users} />
          </Route>         */}
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
