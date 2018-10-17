import React, { Component } from 'react';
import './WelcomeMessage.css';

export class WelcomeMessage extends React.Component{
	render(){
		    return(
			    <div class="welcome-message-container">
	          <div class="text-left medium">Hello my name is</div>
	          <div class="text-center extra-large">David Noftsier</div>
	          <div class="text-right medium">Lets create together</div>
	        </div>
				);
	}
}