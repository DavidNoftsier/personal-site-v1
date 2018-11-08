import React, { Component } from 'react';
import styles from './ProjectCard.module.css';

class ProjectCard extends React.Component{
	render(){
		return(
			<div className={styles['project-card']}>
				<div className={styles['name']}>Goodbye HTML</div>
				<div className={styles['date']}>August 2018</div>
				
				<div><label for='description'>Description:</label>
					<div id='description' className={styles['description']}>
						Goodbye HTML is a Google Chrome extension that allows users to block elements from appearing
						when they visit a website. Multiple options exist for blocking elements temporarily or permanently
						on limited sites or all sites. A robust UI was developed to allow the use of mouse movemenets 
						to discover and choose elements.
					</div>
				</div>
				<div className={styles['tech']}>Chrome Extension, CSS, JS, HTML</div>
			</div>
		);
	}
}

export default ProjectCard;