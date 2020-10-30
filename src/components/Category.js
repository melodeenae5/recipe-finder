import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({ label, getResults }) => {
	return (
		<div>
			<Link to={`/results/${label}`}>
				<Button variant='secondary'>{label}</Button>
			</Link>
		</div>
	);
};

export default Category;
