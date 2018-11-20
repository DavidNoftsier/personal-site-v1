import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './PersonalSite.module.css';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage.js';
import PersonalInfo from './components/PersonalInfo/PersonalInfo.js';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer.js';
import { getProfileData, getProjectsData } from './data.js';

class PersonalSite extends Component {
  render() {
  	let profile = getProfileData();
  	let projects = getProjectsData();

    return (
		<div>
			<header>
		        <WelcomeMessage
		        	name={profile.firstName}
		        >
		        </WelcomeMessage>
	        </header>
	        <main>
		        <PersonalInfo
		        	profile={profile}
		        >
		        </PersonalInfo>
		        <ProjectsContainer 
		        	projects={projects}
		        >
		        </ProjectsContainer>
	        </main>
      	</div>
    );
  }
}

export default PersonalSite;
