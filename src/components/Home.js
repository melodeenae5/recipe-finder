import React from 'react';
import Category from './Category';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const Home = ({ categories, redirect, searchString, getResults }) => {
	return (
		<div className='categories'>
			{categories.map((category) => (
				<Category
					label={category.label}
					getResults={getResults}
					key={category.name}
				/>
			))}
		</div>
	);
};

export default Home;
