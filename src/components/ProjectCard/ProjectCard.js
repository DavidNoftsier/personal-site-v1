import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

class ProjectCard extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className={styles['project-card']}>
				<div className={styles['name']}>
					{this.props.name}
				</div>
				<div className={styles['date']}>
					{this.props.date}
				</div>
				
				<div>
					<label htmlFor='description'>Description:</label>
					<div id='description' className={styles['description']}>
						{this.props.description}
					</div>
				</div>

				<div className={styles['tech']}>
					{this.props.tech}
				</div>
			</div>
		);
	}
}

ProjectCard.propTypes = {
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	tech: PropTypes.string.isRequired,
}

export default ProjectCard;