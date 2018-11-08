import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './PersonalSite.module.css';
import { WelcomeMessage } from './components/WelcomeMessage/WelcomeMessage.js';
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo.js';
import { ProjectCard } from './components/ProjectCard/ProjectCard.js';

class PersonalSite extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage></WelcomeMessage>
        <PersonalInfo></PersonalInfo>
        <ProjectCard></ProjectCard>
      </div>
    );
  }
}

export default PersonalSite;
