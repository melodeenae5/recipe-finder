import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ match, results }) => {
	const [recipe, setRecipe] = useState();
	useEffect(() => {
		setRecipe(
			results.find((recipe) => recipe.recipe.label === `${match.params.name}`)
		);
	}, []);
	if (!recipe) {
		return <div>Sorry! Go back and try this recipe again.</div>;
	}
	return (
		<div className='recipe'>
			<h2>{recipe.recipe.label}</h2>
			<img src={recipe.recipe.image} alt={recipe.recipe.label} />
			<div className='recipe2'>
				<div className='box1'>
					<p>Ingredients:</p>
					<ul>
						{recipe.recipe.ingredientLines.map((ingredient, index) => (
							<li key={index}>{ingredient}</li>
						))}
					</ul>
				</div>
				<div className='box2'>
					<p>Source: {recipe.recipe.source}</p>
					<a href={recipe.recipe.url}>INSTRUCTIONS HERE</a>
				</div>
				<div className='box1'>
					<p>
						{Math.round(recipe.recipe.calories / recipe.recipe.yield)} calories
						per serving
					</p>
					<p>Diet labels: </p>
					<ul>
						{recipe.recipe.dietLabels.map((label, index) => (
							<li key={index}>{label}</li>
						))}
					</ul>

					<p>Health labels: </p>
					<ul>
						{recipe.recipe.healthLabels.map((label, index) => (
							<li key={index}>{label}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
