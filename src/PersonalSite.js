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
		        	firstName={profile.firstName}
		        	lastName={profile.lastName}
		        	location={profile.location}
		        	university={profile.university}
		        	github={profile.github}
		        	linkedIn={profile.linkedIn}
		        	title={profile.title}
		        	degree={profile.degree}
		        	tech={profile.tech}
		        	email={profile.email}
		        	pic="PIC"
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
