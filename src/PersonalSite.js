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
			<header>
		        <WelcomeMessage
		        	name="David"
		        >
		        </WelcomeMessage>
	        </header>
	        <main>
		        <PersonalInfo
		        	name="David Noftsier"
		        	location="Waltham, MA"
		        	github="git"
		        	linkedIn="linkedin"
		        	title="Software Developer"
		        	degree="B.A. Computer Science, University at Albany"
		        	tech="JS, CSS3, HTML5, C#, SQL"
		        	email="dnoftsier@gmail.com"
		        	pic="PIC"
		        >
		        </PersonalInfo>
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
	        </main>
      	</div>
    );
  }
}

export default PersonalSite;
