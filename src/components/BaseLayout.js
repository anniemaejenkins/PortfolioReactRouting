import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// components
// import Home from './Home.js';
// import About from './About.js';
// import Portfolio from './Portfolio.js';
import Navigation from './Navigation.js';

export default class BaseLayout extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Navigation />
        { this.props.children }
      </div>
    );
  }
}
