import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Learn from './components/pages/Learn';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/learn' exact component={Learn} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
