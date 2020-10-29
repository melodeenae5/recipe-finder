import React, { useEffect } from 'react';
import RecipeCard from './RecipeCard';
import Recipe from './Recipe';
import { CardColumns } from 'react-bootstrap';

const Results = ({ match, getResults, results }) => {
	return (
		<CardColumns>
			{results.map((recipe) => (
				<RecipeCard recipe={recipe} key={recipe.recipe.uri} />
			))}
		</CardColumns>
	);
};

export default Results;
