import React from 'react';
import { Button } from 'react-bootstrap';

const Category = ({ label, getResults }) => {
	return (
		<div>
			<Button onClick={() => getResults(label)} variant='secondary'>
				{label}
			</Button>
		</div>
	);
};

export default Category;
