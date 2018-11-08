import React, { Component } from 'react';
import styles from './PersonalInfo.module.css';

export class PersonalInfo extends React.Component{
	render(){
		return(
			<div className={styles['personal-info-container']}>
				<div>David Noftsier</div>
				<div>Waltham, MA</div>
				<div>() ()</div>
			</div>
		);
	}
}