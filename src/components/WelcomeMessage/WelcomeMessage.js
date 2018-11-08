import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeMessage.module.css';

class WelcomeMessage extends React.Component{
	render(){
		return(
			<section aria-label="Welcome Message" className={styles["welcome-message-container"]}>
				<span className={[styles["text-left"], styles["medium"], styles["block-formatting"]].join(' ')}>
					Hi!
				</span>
				<span className={["text-center", styles["extra-large"], styles["block-formatting"]].join(' ')}>
					I'm {this.props.name}
				</span>
				<span className={["text-right", styles["medium"], styles["block-formatting"]].join(' ')}>
					Lets build stuff <span aria-label="Smiley face emoji">:)</span>
				</span>
			</section>
		);
	}
}

WelcomeMessage.propTypes = {
	name: PropTypes.string.isRequired,
}

export default WelcomeMessage;