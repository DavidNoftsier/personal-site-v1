import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectsContainer.module.css';
import ProjectCard from '../ProjectCard/ProjectCard.js';

class ProjectsContainer extends React.Component{
	render(){
		return(
			<section aria-label="Projects" className={styles['projects-container']}>
			{
		        this.props.projects.map((project, index) =>
		          	<ProjectCard 
	          			key={index}
			        	name={project.name}
			        	date={project.date}
			        	description={project.description}
						tech={project.tech}
				    >
				    </ProjectCard>
		        )
		    }
			</section>
		);
	}
}

ProjectsContainer.propTypes = {
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			date: PropTypes.string,
			description: PropTypes.string,
			tech: PropTypes.string,
		})
	).isRequired,
}

export default ProjectsContainer;