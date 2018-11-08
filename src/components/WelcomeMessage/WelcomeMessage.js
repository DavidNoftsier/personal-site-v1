import React, { Component } from 'react';
import styles from './WelcomeMessage.module.css';

class WelcomeMessage extends React.Component{
	render(){
		return(
			<div className={styles["welcome-message-container"]}>
				<div 
					className={[styles["text-left"], styles["medium"]].join(' ')}>
					Hi!
				</div>
				<div 
					className={["text-center", styles["extra-large"]].join(' ')}>
					I'm David</div>
				<div 
					className={["text-right", styles["medium"]].join(' ')}>
					Lets build stuff :)
				</div>
			</div>
		);
	}
}

export default WelcomeMessage;