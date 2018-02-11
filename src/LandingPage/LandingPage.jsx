import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { BasePage } from '../BasePage';
import { userActions } from '../_actions';

class LandingPage extends React.Component {
	render() {
		return (
			<BasePage>
				<div>
					<h2>Hi this is the landing page for Pollster</h2>
				</div>
			</BasePage>
		);
	}
}

export { LandingPage as LandingPage };
