import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
					I'm {this.props.name}</div>
				<div 
					className={["text-right", styles["medium"]].join(' ')}>
					Lets build stuff :)
				</div>
			</div>
		);
	}
}

WelcomeMessage.propTypes = {
	name: PropTypes.string.isRequired,
}

export default WelcomeMessage;