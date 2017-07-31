import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

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
              <NavLink activeClassName="selected" to="/home">
                Home Page
              </NavLink>
            </button>
          </div>

          <div>
            <button>
              <NavLink activeClassName="selected" to="/about">
                About Page
              </NavLink>
            </button>
          </div>

          <div>
            <button>
              <NavLink activeClassName="selected" to="/portfolio">
                Portfolio Page
              </NavLink>
            </button>
          </div>

          <div>
            <button>
              <NavLink activeClassName="selected" to="/contact">
                Contacts Page
              </NavLink>
            </button>
          </div>

          <div>
            <button>
              <NavLink activeClassName="selected" to="/reference">
                Reference Page
              </NavLink>
            </button>
          </div>

        </div>
      </div>
    );
  }
}
