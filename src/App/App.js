import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './App.css';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { LandingPage } from '../LandingPage';
import { SignUpPage } from '../SignUpPage';


class App extends Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});
	}

	render() {
		const { alert } = this.props;
		return (
			<div>
			{alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}

			<Router history={history}>
				<div>
					<PrivateRoute exact path="/" component={HomePage} />
					<Route path="/home" component={LandingPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignUpPage} />
				</div>
			</Router>
			</div>
		);
	}

}

//export default App;
function mapStateToProps(state) {
	const { alert } = state;
	return {
		alert
	};
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App}; 
