import React, { Component } from 'react';
import logo from './logo.svg';
import './PersonalSite.css';
import { WelcomeMessage } from './components/WelcomeMessage.js';

class PersonalSite extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage></WelcomeMessage>
      </div>
    );
  }
}

export default PersonalSite;
