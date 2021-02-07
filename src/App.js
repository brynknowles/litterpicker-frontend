// src/App.js : This is the file for App Component. 
// App Component is the main component in React which acts as a container for all other components.


import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

  return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <NavBar />
        <Content />
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
