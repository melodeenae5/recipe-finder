import React from 'react';
import { Button } from 'react-bootstrap';

const Category = ({ label }) => {
	return (
		<div>
			<Button variant='secondary'>{label}</Button>
		</div>
	);
};

export default Category;
