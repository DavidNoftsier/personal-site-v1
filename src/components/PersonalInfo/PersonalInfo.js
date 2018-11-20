import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faGraduationCap, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCss3Alt, faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import styles from './PersonalInfo.module.css';

const stripUrl = (url) =>{
	let strippedUrl = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");//.split('/')[0];
	return strippedUrl;
}

class PersonalInfo extends React.Component{

	render(){
		const strippedLinkedIn = stripUrl(this.props.profile.linkedIn);
		const strippedGitHub = stripUrl(this.props.profile.github);

		return(
			<div className={styles['personal-info-page']}>
				<section aria-label="Personal Information" className={styles['personal-info-container']}>
					
					<div className={styles['personal-info-left']}>
						<div className={styles['name']}>
							<span aria-label="First Name">{this.props.profile.firstName} </span>
							<span aria-label="Last Name">{this.props.profile.lastName}</span>
						</div>
						<div aria-label="Job Title" className={styles['title']}>{this.props.profile.title}</div>
						{/*<div aria-label="Headshot" className={styles['pic']}>{this.props.pic}</div>*/}
					</div>

					<div className={styles['personal-info-right']}>
						<div aria-label="Location" className={styles['location']}>
							<span aria-hidden="true" title="Location" className={styles['icon']}><FontAwesomeIcon icon={faMapMarkerAlt} /> </span>
							{" " + this.props.profile.location}
						</div>
						<div aria-label="Email" className={styles['email']}>
							<span aria-hidden="true" title="Email" className={styles['icon']}><FontAwesomeIcon icon={faEnvelope} /></span>
							<a title={this.props.profile.email} href={"mailto:" + this.props.profile.email}> {this.props.profile.email}</a>
						</div>
						
						<section aria-label="External Links" className={styles['links']}>
							<div>
								<span aria-hidden="true" title="GitHub" className={styles['icon']}><FontAwesomeIcon icon={faGithub} /></span>
								<a aria-label="Github" title={strippedGitHub} href={this.props.profile.github} target="_blank"> GitHub</a>
							</div>
							<div>
								<span aria-hidden="true" title="Linked In" className={styles['icon']}><FontAwesomeIcon icon={faLinkedin} /></span>
								<a aria-label="LinkedIn" title={strippedLinkedIn} href={this.props.profile.linkedIn} target="_blank"> LinkedIn</a>
							</div>
							<div aria-label="Degree" className={styles['resume']}>
								<span aria-hidden="true" title="Resume" className={styles['icon']}><FontAwesomeIcon icon={faFileAlt} /></span>
								<a aria-label="Resume" title={this.props.profile.resume} href={this.props.profile.resume} target="_blank"> Resume</a>
							</div>
						</section>
						{ /*<div aria-label="Degree" className={styles['degree']}>
							<span aria-hidden="true" title="Degree"><FontAwesomeIcon icon={faGraduationCap} /></span>
							{this.props.degree}
						</div> */ }
						{/*<div aria-label="Technologies used" className={styles['tech']}>{this.props.tech}</div>*/}
					</div>

				</section>
			</div>
		);
	}
}

PersonalInfo.propTypes = {
	profile: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		location: PropTypes.string,
		github: PropTypes.string,
		linkedIn: PropTypes.string,
		title: PropTypes.string,
		degree: PropTypes.string,
		university: PropTypes.string,
		tech: PropTypes.string,
		email: PropTypes.string,
		resume: PropTypes.string,
		pic: PropTypes.string,
	}).isRequired,
}

export default PersonalInfo;