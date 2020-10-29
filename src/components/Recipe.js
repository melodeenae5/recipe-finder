import React, { useState, useEffect } from 'react';

const Recipe = ({ match, results }) => {
	const [recipe, setRecipe] = useState();
	useEffect(() => {
		setRecipe(
			results.find((recipe) => recipe.recipe.label === `${match.params.name}`)
		);
	}, []);
	if (!recipe) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<img src={recipe.recipe.image} alt={recipe.recipe.label} />
			<ul>
				{recipe.recipe.ingredientLines.map((ingredient, index) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>
		</div>
	);
};

export default Recipe;
