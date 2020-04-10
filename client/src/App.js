import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from "./components/navbar"
import home from "./components/home"
import About from "./components/about"
import Contact from "./components/contact"

class App extends Component {

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>  
            <Navbar/>
              <Route exact path='/' component={home}></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/contact' component={Contact}></Route>
        </div>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
