import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
	return (
		<>
			<Navbar bg='primary' variant='dark' fixed='bottom'>
				<Navbar.Text>
					<a href='https://www.edamam.com'>
						<img src='https://developer.edamam.com/images/transparent.png' />
					</a>
				</Navbar.Text>
			</Navbar>
		</>
	);
};

export default Footer;
