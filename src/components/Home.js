import React, {Component} from 'react';

import BaseLayout from './BaseLayout.js';

export default class Home extends Component{
  render(){
    return(
      <BaseLayout>
        <h3>I am the Home Component</h3>
      </BaseLayout>
    );
  }
}
