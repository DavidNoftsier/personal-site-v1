import React, { Component } from 'react';
import './WelcomeMessage.css';

export class WelcomeMessage extends React.Component{
	render(){
		return(
			<div class="welcome-message-container">
				<div class="text-left medium">Hi!</div>
				<div class="text-center extra-large">I'm David</div>
				<div class="text-right medium">Lets build stuff :)</div>
			</div>
		);
	}
}