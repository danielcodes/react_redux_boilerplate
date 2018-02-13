import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import { BasePage } from '../BasePage';
import { userActions } from '../_actions';
import { alertActions } from '../_actions';

class SignUpPage extends React.Component {
	constructor(props) {
		super(props);

		// reset login status
		this.props.dispatch(userActions.logout());

		this.state = {
			username: '',
			email: '',
			password: '',
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, email, password } = this.state;
		const { dispatch } = this.props;
		if (username && email && password) {
			dispatch(userActions.signUp(username, email, password));
		}
		else {
			dispatch(alertActions.error('Missing fields in Sign Up Form'));
		}
	}

	render() {
		const { signingIn } = this.props;
		const { username, email, password, submitted } = this.state;
		return (
			<BasePage>
				<div className='login-form'>
					<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
						<Grid.Column style={{ maxWidth: 450 }}>
							<Header as='h2' color='teal' textAlign='center'>
								Sign up
							</Header>
							<Form size='large' onSubmit={this.handleSubmit}>
								<Segment stacked>
									<Form.Input fluid 
										name='username' 
										icon='user' 
										iconPosition='left' 
										placeholder='Username' 
										error={submitted && !username}
										onChange={this.handleChange} 
									/>
									<Form.Input fluid 
										name='email' 
										icon='address card' 
										iconPosition='left' 
										placeholder='Email' 
										type='email'
										error={submitted && !email}
										onChange={this.handleChange} 
									/>
									<Form.Input fluid 
										name='password' 
										icon='lock' 
										iconPosition='left' 
										placeholder='Password' 
										type='password' 
										error={submitted && !password}
										onChange={this.handleChange}
									/>
									<Button 
										fluid 
										type='submit' 
										color='teal' 
										size='large'
										content='Sign Up'
										loading={signingIn}
									/>
								</Segment>
							</Form>
						</Grid.Column>
					</Grid>
				</div>
			</BasePage>
		);
	}
}

function mapStateToProps(state) {
	const { signingIn } = state.signup;
	return {
		signingIn	
	};
}

const connectedSignUpPage = connect(mapStateToProps)(SignUpPage);
export { connectedSignUpPage as SignUpPage };
