import React, { Component } from 'react';
import styles from './PersonalInfo.module.css';

export class PersonalInfo extends React.Component{
	render(){
		return(
			<div className={styles['personal-info-container']}>
				<div className={styles['name']}>David Noftsier</div>
				<div className={styles['location']}>Waltham, MA</div>
				<div className={styles['links']}>() ()</div>
				<div className={styles['title']}>Software Developer</div>
				<div className={styles['degree']}>B.A. Computer Science, University at Albany</div>
				<div className={styles['tech']}>JS, CSS3, HTML5, C#, SQL</div>
				<div className={styles['email']}>dnoftsier@gmail.com</div>
				<div className={styles['pic']}>PIC</div>
			</div>
		);
	}
}