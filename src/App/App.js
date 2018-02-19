import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
	Message,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


class App extends Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});
	}

	render(){
    const { children, alert } = this.props
    const { fixed } = false

	  return (
			<Router history={history}>
				<Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>

					<Menu
						fixed={fixed}
						inverted={!fixed}
						pointing={!fixed}
						secondary={!fixed}
						size='large'
					>
						<Container>
							<Menu.Item as={Link} to="/" active>Home</Menu.Item>
							<Menu.Item as='a'>About</Menu.Item>
							<Menu.Item position='right'>
								{localStorage.getItem('user') ? (
									<Button as={Link} inverted={!fixed} to="/login">Log Out</Button>
									) : (
									<div>
										<Button as={Link} inverted={!fixed} to="/login">Log In</Button>
										<Button as={Link} inverted={!fixed} to="/signup" primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
									</div>
									)
								}
							</Menu.Item>
						</Container>
					</Menu>

					{alert.message && <Message compact color={alert.type} content={alert.message}/>}

					<PrivateRoute exact path="/" component={HomePage} />
					<Route path="/home" component={LandingPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignUpPage} />
				</Segment>
			</Router>
		)	
	}
}

App.propTypes = {
  children: PropTypes.node,
}

function mapStateToProps(state) {
	const { alert } = state;
	return {
		alert
	};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
