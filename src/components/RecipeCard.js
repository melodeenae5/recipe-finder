import React from 'react';
import { Card } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {
	return (
		<Card style={{ width: '18rem' }} >
			<Card.Img variant='top' src={recipe.recipe.image} />
			<Card.Body>
				<Card.Title>{recipe.recipe.label}</Card.Title>
				<Card.Text>Source: {recipe.recipe.source}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default RecipeCard;
