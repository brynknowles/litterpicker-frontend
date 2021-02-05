// src/App.js : This is the file for App Component. 
// App Component is the main component in React which acts as a container for all other components.



// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  const [cleanups, setCleanups] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cleanups")
    // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
    .then(r => r.json())
    .then(setCleanups)
  }, [])

  console.log(cleanups)

  return (
      <div className="container">
        <div className="header">
          <Header title="LitterPicker" />
        </div>
        <div className="nav">
          <NavBar cleanups={cleanups} />
        </div>
        <div className="content">
          <Content />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
  );
}

export default App;
