// src/App.js : This is the file for App Component. 
// App Component is the main component in React which acts as a container for all other components.


import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Explore from './components/pages/Explore'
import ProfileDetail from './components/pages/ProfileDetail'
import CleanupForm from './components/pages/CleanupForm'
import SignupForm from './components/pages/SignupForm'
import Footer from './components/Footer'
// import LoginForm from './components/LoginForm'



function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([])
  const [cleanups, setCleanups] = useState([])
  const [userCleanups, setUserCleanups] = useState([])
  const [cleanupSearchTerm, setCleanupSearchTerm] = useState("")

  const [currentUser, setCurrentUser] = useState({
    id: 1,
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

  // console.log("currentUser in App: ", currentUser

  // console.log("users, cleanups, userCleanups and searchTerm in App", { users, cleanups, cleanupSearchTerm })

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(r => r.json())
    // .then(data => console.log("users data in App", data))
    .then(data => setUsers(data))
  }, [])

  // console.log("users in App: ", users)

  useEffect(() => {
    fetch("http://localhost:3000/cleanups")
    .then(r => r.json())
    // .then(data => console.log("cleanups data in App", data))
    .then(data => setCleanups(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/user_cleanups")
    .then(r => r.json())
    // .then(data => console.log("userCleanups data in App: ", data))
    .then(data => setUserCleanups(data))
  }, [])

  // console.log("users in App", users)
  console.log("cleanups in App", cleanups)
  // console.log("userCleanups in App: ", userCleanups)

  // **************************************************************************
  // CLEANUPS

    // DONE - Create Cleanup
  function handleCreateCleanup(newCleanup) {
      // console.log(newCleanup)
      setCleanups([newCleanup, ...cleanups]);
  }

    // DONE - Update Cleanup cheer
  function handleUpdateCheer(updatedCleanup) {
    // console.log("updated cleanup in App: ", updatedCleanup)
    const updatedCleanups = cleanups.map((cleanup) => {
        if (cleanup.id === updatedCleanup.id) {
          return updatedCleanup
        } else {
          return cleanup
        }
      })

    setCleanups(updatedCleanups)
  }

   // DONE - Update Cleanup time and date
  function handleUpdateCleanup(updatedCleanup) {
    console.log("updatedCleanup in App: ", updatedCleanup)
    const updatedCleanupArray = cleanups.map((cleanup) => {
      if (cleanup.id === updatedCleanup.id) {
        return updatedCleanup
      } else {
        return cleanup
      }
    })
    setCleanups(updatedCleanupArray)
  }

    // DONE - Delete Cleanup
  function handleDeleteCleanup(cleanupToDelete) {
    // console.log(cleanupToDelete)
    const updatedCleanups = cleanups.filter((cleanup) => cleanup.id !== cleanupToDelete)
    setCleanups(updatedCleanups)
  }
    

  // **************************************************************************
  // USER_CLEANUPS
  console.log(cleanups.keys())
  // console.log(cleanups.users)

    // DONE - Sign User up to Cleanup Event
  function handleAttendeeSignup(newAttendee) {
    // console.log("attendee in App: ", newAttendee)
    // debugger
    // setUserCleanups([...userCleanups, newAttendee])
    let currentCleanup = cleanups.map(cleanup => {
      if (cleanup.id === newAttendee.cleanup.id) {
        // console.log(cleanup)
        cleanup.user_cleanups.push(newAttendee)
      }
      return cleanup
    })
    // console.log(currentCleanup)
    setCleanups(currentCleanup)
  }

  // function handleAttendeeSignup(newAttendee) {
  //   // console.log("attendee in App: ", newAttendee)
  //   setUserCleanups([...userCleanups, newAttendee])
  //   setCleanups({
  //     ...cleanups, 
  //     user_cleanups: [...cleanups.user_cleanups, newAttendee]
  //   })
  // }


    // WORK ON THIS - Remove User From Event
  function handleLeaveEvent(cleanupIdToDelete) {
    // console.log("cleanupIdToDelete in App: ", cleanupIdToDelete)
    console.log("hi")
    // console.log("eventAttendeeToLeave in App", eventAttendeeToLeave)
    // let currentCleanup = cleanups.map(cleanup => cleanup)
    // const updatedUserCleanups = cleanups.filter((cleanup) => {
    //   if 
    // }cleanup.id !== cleanupIdToDelete)
    // setUserCleanups(updatedUserCleanups)
    // setCleanups()
  }

  function handleDeleteAttendee(attendee) {
    console.log("attendee in App: ", attendee)
  }

  // **************************************************************************
  // USERS

    // DONE - Create User
  function handleCreateUser(newUser) {
    // console.log(newUser)
    setUsers([newUser, ...users]);
  }

  function handleUpdateProfile(updatedProfile) {
    console.log("updatedProfile in App: ", updatedProfile)
    const updatedProfileArray = users.map((user) => {
      if (user.id === updatedProfile.id) {
        return updatedProfile
      } else {
        return user
      }
    })
    setUsers(updatedProfileArray)
  }

    // DONE - Delete User
  function handleDeleteUser(userToDelete) {
    console.log("userToDelete in App: ", userToDelete)
    const updatedUsers = users.filter((user) => user.id !== userToDelete)
    setUsers(updatedUsers)
  }

  // **************************************************************************
  // SEARCH CLEANUPS

    // DONE - Searches cleanups
  const filteredCleanups = cleanups.filter((cleanup) => {
    // console.log("cleanup in search term filter: ", cleanup)
    return cleanup.location.toLowerCase().includes(cleanupSearchTerm.toLowerCase())
  })

  return (
      <div className="App">
        <Header />
        {/* <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/explore">
            <Explore 
              currentUser={currentUser} 
              users={users} 
              setUsers={setUsers}
              onUpdateProfile={handleUpdateProfile}
              onDeleteUser={handleDeleteUser} 
              cleanups={filteredCleanups} 
              setCleanups={setCleanups} 
              cleanupSearchTerm={cleanupSearchTerm} 
              setCleanupSearchTerm={setCleanupSearchTerm} 
              onUpdateCheer={handleUpdateCheer} 
              onUpdateCleanup={handleUpdateCleanup} 
              onAttendeeSignup={handleAttendeeSignup} 
              onLeaveEvent={handleLeaveEvent}
              onDeleteCleanup={handleDeleteCleanup} 
              handleDeleteAttendee={handleDeleteAttendee}
            /> 
          </Route>
          <Route exact path="/users/:id">
            <ProfileDetail />
          </Route>
          {/* <Route exact path="/users/:id">
            <ProfileDetail users={users} />
          </Route>         */}
          {/* <Route exact path="/cleanups/:id">
            <CleanupDetail cleanups={filteredCleanups}/>
          </Route> */}
          <Route exact path="/create_event">
            <CleanupForm 
              users={users} 
              onCreateCleanup={handleCreateCleanup}
            />
          </Route>
          <Route exact path="/signup">
            <SignupForm 
              onCreateUser={handleCreateUser} 
            />
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
