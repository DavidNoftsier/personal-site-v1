import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './PersonalSite.module.css';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage.js';
import PersonalInfo from './components/PersonalInfo/PersonalInfo.js';
import ProjectCard from './components/ProjectCard/ProjectCard.js';

class PersonalSite extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage></WelcomeMessage>
        <PersonalInfo></PersonalInfo>
        <ProjectCard 
        	name="Goodbye HTML"
        	date="August 2018"
        	description="Goodbye HTML is a Google Chrome extension that allows users to block elements from appearing
						when they visit a website. Multiple options exist for blocking elements temporarily or permanently
						on limited sites or all sites. A robust UI was developed to allow the use of mouse movemenets 
						to discover and choose elements."
			tech="Chrome Extension, CSS, JS, HTML"
        >
        </ProjectCard>
      </div>
    );
  }
}

export default PersonalSite;
