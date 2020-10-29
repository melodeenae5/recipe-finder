import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';

const SearchBar = ({ handleChange, search, searchString }) => {
	return (
		<>
			<Navbar bg='primary' variant='dark'>
				<Navbar.Brand href='/'>Recipe Finder</Navbar.Brand>
				<Nav className='mr-auto'>
					<Form inline onSubmit={search}>
						<FormControl
							type='text'
							placeholder='Search recipes...'
							className='mr-sm-2'
							onChange={handleChange}
						/>
						<Button type='submit' variant='outline-light'>
							Search
						</Button>
					</Form>
				</Nav>
			</Navbar>
		</>
	);
};

export default SearchBar;
