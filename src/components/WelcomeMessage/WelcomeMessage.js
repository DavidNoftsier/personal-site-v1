import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeMessage.module.css';

class WelcomeMessage extends React.Component{
	render(){
		return(
			<section aria-label="Welcome Message" className={styles["welcome-message-container"]}>
				<span className={[styles["text-left"], styles["medium"], styles["block-formatting"], styles["greeting-1"]].join(' ')}>
					Hi!
				</span>
				<span className={["text-center", styles["extra-large"], styles["block-formatting"]].join(' ')}>
					<span className={styles["greeting-2"]}>I'm </span> 
					<span className={styles["greeting-3"]}>{this.props.name}</span>
				</span>
				<span className={["text-right", styles["medium"], styles["block-formatting"]].join(' ')}>
					<span className={styles["greeting-4"]}>Let's </span>
					<span className={styles["greeting-5"]}>build </span>
					<span className={styles["greeting-6"]}>stuff </span>
					<div aria-label="Smiley face emoji" className={styles["greeting-7"]}>
						<span aria-hidden="true" className={styles["greeting-smiley"]}></span>
					</div>
				</span>
			</section>
		);
	}
}

WelcomeMessage.propTypes = {
	name: PropTypes.string.isRequired,
}

export default WelcomeMessage;