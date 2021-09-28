import React, {useState} from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getDefaultNormalizer } from '@testing-library/dom';


const App = () => {

  return(
    <Router>
      <div className="app">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
      </div>    
    </Router>
    
  );
}



export default App;