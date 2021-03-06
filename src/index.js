import React from 'react';
import ReactDOM from 'react-dom';

// import styles
import './styles/index.css';

// import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import components
import App from './components/App.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Reference from './components/Reference.js';
import BaseLayout from './components/BaseLayout.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/reference" component={Reference} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
   document.getElementById('root')
 );

registerServiceWorker();
