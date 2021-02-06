// src/App.js : This is the file for App Component. 
// App Component is the main component in React which acts as a container for all other components.



// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

  return (
      <div className="App">
        <Header />
        <NavBar />
        <Content />
        <Footer />
      </div>
  );
}

export default App;
