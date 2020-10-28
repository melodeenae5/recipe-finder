import React from 'react';
import Category from './Category';
import { Button } from 'react-bootstrap';

const Home = ({ categories }) => {
	return (
		<div className='categories'>
			{categories.map((category) => (
				<Category label={category.label} />
			))}
		</div>
	);
};

export default Home;
