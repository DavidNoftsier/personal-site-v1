import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PersonalInfo.module.css';

class PersonalInfo extends React.Component{
	render(){
		return(
			<section aria-label="Personal Information" className={styles['personal-info-container']}>
				<div aria-label="Name" className={styles['name']}>{this.props.name}</div>
				<div aria-label="Location" className={styles['location']}>{this.props.location}</div>
				<section aria-label="External Links" className={styles['links']}>
					<span aria-label="Github" >{this.props.github}</span>
					<span aria-label="LinkedIn" >{this.props.linkedIn}</span>
				</section>
				<div aria-label="Job Title" className={styles['title']}>{this.props.title}</div>
				<div aria-label="Degree" className={styles['degree']}>{this.props.degree}</div>
				<div aria-label="Technologies used" className={styles['tech']}>{this.props.tech}</div>
				<div aria-label="Email" className={styles['email']}>{this.props.email}</div>
				<div aria-label="Headshot" className={styles['pic']}>{this.props.pic}</div>
			</section>
		);
	}
}

PersonalInfo.propTypes = {
	name: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired,
	linkedIn: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	degree: PropTypes.string.isRequired,
	tech: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
}

export default PersonalInfo;