import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

class ProjectCard extends React.Component{
	render(){
		return(
			<div className={styles['project-card']}>
				<h4 className={styles['name']}>
					{this.props.name}
				</h4>
				<hr className={styles['horizontal-rule']}/>
				<div className={styles['date']}>
					{this.props.date}
				</div>
				
				<section>
					<label htmlFor='description'>Description:</label>
					<article id='description' className={styles['description']}>
						{this.props.description}
					</article>
				</section>

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