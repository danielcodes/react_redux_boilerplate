import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { LandingPage } from '../LandingPage';
import { SignUpPage } from '../SignUpPage';


const App = () => (
	<div>
		<Router history={history}>
			<div>
				<PrivateRoute exact path="/" component={HomePage} />
				<Route path="/home" component={LandingPage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/signup" component={SignUpPage} />
			</div>
		</Router>
	</div>
)

export { App }; 
