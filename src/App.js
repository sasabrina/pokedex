import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Home, Pokedex } from './containers/index'
import './App.scss'

const App = () => {
  return (
    <Router>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/pokedex'} component={Pokedex}/>
    </Router>
  )
}

export default App;
