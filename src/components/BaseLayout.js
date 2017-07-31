import React, {Component} from 'react';

// import dumb components
import Home from './Home.js';
import About from './About.js';
import Portfolio from './Portfolio.js';

export default class BaseLayout extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <Home/>
      <About/>
      <Portfolio/>
      </div>
    );
  }
}
