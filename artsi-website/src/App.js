import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Practice from './components/pages/Practice';
import Tutorial from './components/pages/Tutorial'

function App() {
  return (
    <div className='menu'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/practice' exact component={Practice} />
          <Route path='/about' exact component={About} />
          <Route path='/tutorial' exact component={Tutorial} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
