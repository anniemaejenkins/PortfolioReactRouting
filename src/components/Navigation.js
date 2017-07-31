import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// components
// import Home from './Home.js';
// import About from './About.js';
// import Portfolio from './Portfolio.js';

export default class Navigation extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className="navBar">
          <div>
            <button>
              <Link to="/home">
                Home Page
              </Link>
            </button>
          </div>

          <div>
            <button>
              <Link to="/about">
                About Page
              </Link>
            </button>
          </div>

          <div>
            <button>
              <Link to="/portfolio">
                Portfolio Page
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
