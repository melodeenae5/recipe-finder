import './App.scss';
import { Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
	const categories = [
		{ name: 'Breakfast', label: 'Breakfast', type: 'mealType' },
		{ name: 'Lunch', label: 'Lunch', type: 'mealType' },
		{ name: 'Dinner', label: 'Dinner', type: 'mealType' },
		{ name: 'Snack', label: 'Snack', type: 'mealType' },
		{ name: 'Desserts', label: 'Desserts', type: 'dishType' },
		{ name: 'Main course', label: 'Main course', type: 'dishType' },
		{ name: 'Salad', label: 'Salad', type: 'dishType' },
		{ name: 'Sandwiches', label: 'Sandwiches', type: 'dishType' },
		{ name: 'Soup', label: 'Soup', type: 'dishType' },
		{ name: 'Starter', label: 'Starter', type: 'dishType' },
		{ name: 'American', label: 'American', type: 'cuisineType' },
		{ name: 'Asian', label: 'Asian', type: 'cuisineType' },
		{ name: 'Indian', label: 'Indian', type: 'cuisineType' },
		{ name: 'Italian', label: 'Italian', type: 'cuisineType' },
		{ name: 'Mediterranean', label: 'Mediterranean', type: 'cuisineType' },
		{ name: 'Mexican', label: 'Mexican', type: 'cuisineType' },
		{ name: 'low-carb', label: 'Low-Carb', type: 'Diet' },
		{ name: 'low-fat', label: 'Low-Fat', type: 'Diet' },
		{ name: 'gluten-free', label: 'Gluten-Free', type: 'Health' },
		{ name: 'keto-friendly', label: 'Keto', type: 'Health' },
		{ name: 'kosher', label: 'Kosher', type: 'Health' },
		{ name: 'low-sugar', label: 'Low Sugar', type: 'Health' },
		{ name: 'paleo', label: 'Paleo', type: 'Health' },
		{ name: 'vegan', label: 'Vegan', type: 'Health' },
		{ name: 'vegetarian', label: 'Vegetarian', type: 'Health' },
	];
	return (
		<div>
			<SearchBar />
			<Route path='/' exact component={Home} />
			<Route path='/results/:search' component={Results} />
			<Footer />
		</div>
	);
}

export default App;
