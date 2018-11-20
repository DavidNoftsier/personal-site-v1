import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './PersonalSite.module.css';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage.js';
import PersonalInfo from './components/PersonalInfo/PersonalInfo.js';
import ProjectCard from './components/ProjectCard/ProjectCard.js';
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
		        	github={profile.github}
		        	linkedIn={profile.linkedIn}
		        	title={profile.title}
		        	degree={profile.degree}
		        	tech={profile.tech}
		        	email={profile.email}
		        	pic="PIC"
		        >
		        </PersonalInfo>
		        {
			        projects.map((project, index) =>
			          	<ProjectCard 
					        	name={project.name}
					        	date={project.date}
					        	description={project.description}
								tech={project.tech}
					    >
					    </ProjectCard>
			        )
		    	}
	        </main>
      	</div>
    );
  }
}

export default PersonalSite;
