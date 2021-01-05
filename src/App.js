import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

import './App.css';

const App = () => {
  const AP_ID = 'ecd7bbac';
  const APP_KEY = '7801b972b0f50ba6fb9e5158477e89f6';

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  //async await call 

  useEffect(() => {
    getRecipe();

  }, [query]);

  //creating a separate function for a synchronous calls 

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value); // value of the input 
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }




  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar'
          type='text' value={search}
          onChange={updateSearch} />

        <button className='search-button'
          type='submit'>Search
        </button>

      </form>

      <div className="recipe">

        {recipe.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />

        ))};
      </div>

    </div>

  );
};



export default App;
