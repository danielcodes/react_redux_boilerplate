import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Pollster'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='An application to create polls'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI, nor Semantic UI React don't offer a responsive navbar, hover it can be easily implemented.
 * It can be more complicated, but you can create really flexible markup.
 */

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
				<Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
					<Menu
						fixed={fixed ? 'top' : null}
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
					{children}
				</Segment>
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export { ResponsiveContainer as BasePage };
