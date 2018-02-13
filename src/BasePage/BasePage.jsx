import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

import { history } from '../_helpers';
import { alertActions } from '../_actions';


class BasePage extends Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});
	}

  render() {
    const { children, alert } = this.props
    const { fixed } = false

    return (
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
				{children}
			</Segment>
    )
  }
}

BasePage.propTypes = {
  children: PropTypes.node,
}

function mapStateToProps(state) {
	const { alert } = state;
	return {
		alert
	};
}

const connectedBasePage = connect(mapStateToProps)(BasePage)
export { connectedBasePage as BasePage };
