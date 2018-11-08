import React, { Component } from 'react';
import styles from './PersonalInfo.module.css';

class PersonalInfo extends React.Component{
	render(){
		return(
			<div className={styles['personal-info-container']}>
				<div className={styles['name']}>{this.props.name}</div>
				<div className={styles['location']}>{this.props.location}</div>
				<div className={styles['links']}>{this.props.name}</div>
				<div className={styles['title']}>{this.props.title}</div>
				<div className={styles['degree']}>{this.props.degree}</div>
				<div className={styles['tech']}>{this.props.tech}</div>
				<div className={styles['email']}>{this.props.email}</div>
				<div className={styles['pic']}>{this.props.pic}</div>
			</div>
		);
	}
}

export default PersonalInfo;