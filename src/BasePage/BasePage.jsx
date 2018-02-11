import React from 'react';
import { Link } from 'react-router-dom';


function BasePage(props) {
	return (
		<div>
			<div>
			{localStorage.getItem('user') ? (
					<div>
						<Link to="/">Home</Link>
						<Link to="/login">Log Out</Link>
					</div>
				) : (
					<div>
						<Link to="/">Home</Link>
						<Link to="/login">Log In</Link>
						<Link to="/signup">Sign Up</Link>
					</div>
				)}
			</div>

			{props.children}
		</div>
	)
}

export { BasePage as BasePage };
