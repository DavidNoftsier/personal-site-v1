import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PersonalInfo.module.css';

class PersonalInfo extends React.Component{
	render(){
		return(
			<section aria-label="Personal Information" className={styles['personal-info-container']}>
				<div className={styles['name']}>
					<div aria-label="First Name">{this.props.firstName}</div>
					<div aria-label="Last Name">{this.props.lastName}</div>
				</div>
				<div aria-label="Location" className={styles['location']}>{this.props.location}</div>
				<section aria-label="External Links" className={styles['links']}>
					<a aria-label="Github" title={this.props.github} href={this.props.github} target="_blank"> Github</a>
					<a aria-label="LinkedIn" title={this.props.linkedIn} href={this.props.linkedIn} target="_blank"> LinkedIn</a>
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
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
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