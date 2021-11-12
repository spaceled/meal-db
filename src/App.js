import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MealFinder from './components/MealFinder/MealFinder';

function App() {
  const [meal, setMeal] = useState({});

  useEffect(() => {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
    fetch(url)
    .then(response => response.json())
    .then(data => setMeal(data?.meals[0]))
  }, [])
  return (
    <div className='App'>
      <h3>Name: {meal.strMeal}</h3>
      <MealFinder></MealFinder>
    </div>
  );
}

export default App;
