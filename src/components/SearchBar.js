import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';

const SearchBar = () => {
	return (
		<>
			<Navbar bg='primary' variant='dark'>
				<Navbar.Brand href='/'>Recipe Finder</Navbar.Brand>
				<Nav className='mr-auto'>
					<Form inline>
						<FormControl type='text' placeholder='Search' className='mr-sm-2' />
						<Button variant='outline-light'>
							Search
						</Button>
					</Form>
				</Nav>
			</Navbar>
		</>
	);
};

export default SearchBar;
