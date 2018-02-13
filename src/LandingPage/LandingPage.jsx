import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { BasePage } from '../BasePage';


class LandingPage extends React.Component {
	render() {
		return (
			<BasePage>
				<div>
					<h2>Hi this is the landing page</h2>
				</div>
			</BasePage>
		);
	}
}

export { LandingPage };
