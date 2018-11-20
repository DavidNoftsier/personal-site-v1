import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCss3Alt, faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import styles from './PersonalInfo.module.css';

class PersonalInfo extends React.Component{
	render(){
		return(
			<div className={styles['personal-info-page']}>
				<section aria-label="Personal Information" className={styles['personal-info-container']}>
					
					<div className={styles['personal-info-left']}>
						<div className={styles['name']}>
							<span aria-label="First Name">{this.props.firstName} </span>
							<span aria-label="Last Name">{this.props.lastName}</span>
						</div>
						<div aria-label="Job Title" className={styles['title']}>{this.props.title}</div>
						{/*<div aria-label="Headshot" className={styles['pic']}>{this.props.pic}</div>*/}
					</div>

					<div className={styles['personal-info-right']}>
						<div aria-label="Location" className={styles['location']}>
							<span aria-hidden="true" title="Location"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
							{this.props.location}
						</div>
						<div aria-label="Email" className={styles['email']}>
							<span aria-hidden="true" title="Email"><FontAwesomeIcon icon={faEnvelope} /></span>
							<a href={"mailto:" + this.props.email}> {this.props.email}</a>
						</div>
						
						<section aria-label="External Links" className={styles['links']}>
							<div>
								<span aria-hidden="true" title="GitHub"><FontAwesomeIcon icon={faGithub} /></span>
								<a aria-label="Github" title={this.props.github} href={this.props.github} target="_blank"> Github</a>
							</div>
							<div>
								<span aria-hidden="true" title="Linked In"><FontAwesomeIcon icon={faLinkedin} /></span>
								<a aria-label="LinkedIn" title={this.props.linkedIn} href={this.props.linkedIn} target="_blank"> LinkedIn</a>
							</div>
						</section>
						<div aria-label="Degree" className={styles['degree']}>
							<span aria-hidden="true" title="Degree"><FontAwesomeIcon icon={faGraduationCap} /></span>
							{this.props.degree}
						</div>
						{/*<div aria-label="Technologies used" className={styles['tech']}>{this.props.tech}</div>*/}
					</div>

				</section>
			</div>
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
	university: PropTypes.string.isRequired,
	tech: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
}

export default PersonalInfo;