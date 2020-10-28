import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, Redirect } from 'react-router-dom';
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
	const searchOptions = {
		appID: process.env.REACT_APP_APP_ID,
		key: process.env.REACT_APP_API_KEY,
		api: 'https://api.edamam.com/search',
	};
	const [results, setResults] = useState([]);
	const [lastSearch, setLastSearch] = useState('');
	const [searchString, setSearchString] = useState('');
	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function search(event) {
		event.preventDefault();
		// getResults();
		return <Redirect to={`/results/${searchString}`} />;
	}
	function getResults() {
		const url = `${searchOptions.api}?q=${searchString}&app_id=${searchOptions.appID}&app_key=${searchOptions.key}`;

		fetch(url)
			.then((res) => res.json())
			.then((resJson) => setResults([resJson.hits]))
			.catch((err) => console.log(err));
	}
	return (
		<div>
			<SearchBar handleChange={handleChange} search={search} />
			<Route path='/' exact render={() => <Home categories={categories} />} />
			<Route
				path='/results/:search'
				render={(routerProps) => (
					<Results match={routerProps.match} getResults={getResults} />
				)}
			/>
			<Footer />
		</div>
	);
}

export default App;
